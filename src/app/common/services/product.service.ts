import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
@Injectable({
    providedIn: 'root'
})

export class PoductService {
    constructor() { }

    index: number = 3;
    product: any = [{
        id: 1,
        productName: "First",
        manufecturerName: "Ashok",
        productType: "Abc",
        costPrice: 50,
        retailPrice: 90,
        status: "Active",
        mfgDate: new Date(),
        exprDate: new Date(),
        imgUrl: ""
    },
    {
        id: 2,
        productName: "Second",
        manufecturerName: "Vedant",
        productType: "Abc",
        costPrice: 60,
        retailPrice: 100,
        status: "Inactive",
        mfgDate: new Date(),
        exprDate: new Date(),
        imgUrl: ""
    },
    {
        id: 3,
        productName: "Third",
        manufecturerName: "Naman",
        productType: "Abc",
        costPrice: 60,
        retailPrice: 100,
        status: "Active",
        mfgDate: new Date(),
        exprDate: new Date(),
        imgUrl: ""
    }];
    public editObj: Product = {
        id: 0,
        productName: "",
        manufecturerName: "",
        productType: "",
        costPrice: 0,
        retailPrice: 0,
        status: "",
        mfgDate: new Date(),
        exprDate: new Date(),
        imgUrl: ""
    };

    getProduct() {
        return this.product;
    }
    viewData(id: any) {

        this.product.forEach((element: Product) => {
            if (element.id == id) {
                Object.assign(this.editObj, element);
            }
        });
        return this.editObj;
    }
    editProduct(editObj: Product) {
        this.product.forEach((element: Product) => {
            if (element.id == this.editObj.id) {
                element.costPrice = this.editObj.costPrice;
                element.manufecturerName = this.editObj.manufecturerName;
                element.productName = this.editObj.productName;
                element.productType = this.editObj.productType;
                element.retailPrice = this.editObj.retailPrice;
                element.mfgDate = this.editObj.mfgDate;
                element.exprDate = this.editObj.exprDate;
                element.status = this.editObj.status;

            }
        });
    }
    addProduct(item: any) {
        this.product.forEach((element: Product) => {
            if (element.id > this.index) {
                this.index = element.id;
            }
        });
        item.id = this.index + 1;
        this.product.push(item);
    }
}
