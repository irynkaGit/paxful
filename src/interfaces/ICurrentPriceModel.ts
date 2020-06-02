export interface ICurrentPriceModel {
    time: {
        updated: string;
        updatedISO: string;
        updateduk: string;
    }
    disclaimer: string;
    bpi: {
        USD:{
            code?:string;
            rate?:string;
            descriptions?:string;
            rate_float: number
        }
    }
}