export interface Product{
    id:number;
    productName:string;
    manufecturerName:string;
    productType:string;
    costPrice:number;
    retailPrice:number;
    status:string;
    mfgDate:Date;
    exprDate:Date;
    imgUrl:string

    // Product(){
    //   this.id = 0;
    //   this.productName = '';
    //   this.manufecturerName = '';
    //   this.productType = '';
    //   this.costPrice = 0;
    //   this.retailPrice = 0;
    // }
  }