import {BadRequestException, Controller, HttpException, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {diskStorage} from 'multer';
import {extname} from 'path';
import {Express} from 'express';
import {AppService} from './app.service';
import {FileInterceptor} from "@nestjs/platform-express";
import {processFile} from "./utils/file.util";
import {CsvRow} from "./types";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }


    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, callback) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
                },
            }),
            fileFilter: (req, file, callback) => {
                if (!file.originalname.match(/\.(csv|txt)$/)) {
                    return callback(
                        new BadRequestException('Only CSV files are allowed!'),
                        false,
                    );
                }
                callback(null, true);
            },
        }),
    )
    async uploadCSV(@UploadedFile() file: Express.Multer.File): Promise<string> {
        if (!file) {
            throw new BadRequestException('File not uploaded.');
        }
        const fileData: CsvRow[] = (await processFile(file)).data;
        try {
            await this.appService.insertResults(fileData);
        } catch (err) {
            throw new HttpException(
                {
                    msg: 'Error inserting results',
                    err
                },
                500,)
        }
        return 'success';
    }
}
