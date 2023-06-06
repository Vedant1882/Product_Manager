import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { PoductService } from 'src/app/common/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @ViewChild('form') form: any;
  editMode: boolean = false;
  addMode: boolean = false;
  mode: boolean = false;
  dateFormate = AppConstants.dateFormat;
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
 
  productId=0
  constructor(private productService: PoductService,private router: Router,private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params=> {
      this.productId = params['id'];
    });
    if(Number(this.productId) > 0){
      this.editObj=this.productService.viewData(this.productId);
      this.editMode=true;
    }
  }
  save(item: any) {
    if (this.editObj.id == 0 || this.editObj.id == null) {
      this.productService.addProduct(item);
      this.router.navigate(['/product']);
    }
    else {
      if (this.form.valid) {
        this.productService.editProduct(this.editObj);
        this.router.navigate(['/product']);
      }
    }
    
  }
}
