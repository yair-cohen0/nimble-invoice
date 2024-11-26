import {parse} from "date-fns";

export const formatDate = (date: string): string => {
    const parsedDate = parse(date, 'dd/MM/yyyy', new Date());
    return parsedDate.toISOString().split('T')[0];
}