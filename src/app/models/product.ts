export interface Product{
    id:number;
    productName:string;
    manufrecturerName:string;
    productType:string;
    costPrice:number;
    retailPrice:number;
    categoryId:number;
    status?:boolean;
    manufrecturingDate:Date;
    expiryDate:Date;
    imageUrl:string;
    name:string;
  }