import * as csvParser from 'csv-parser';
import * as fs from 'fs';


export const processFile = (file: Express.Multer.File): Promise<any> => {
    const results = [];
    const filePath = file.path;

    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve({message: 'File processed successfully', data: results});
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error(`Failed to delete file: ${filePath}`, err);
                    }
                });
            })
            .on('error', (error) => {
                console.error('Error reading file:', error);
                reject(error);
            });
    });
}