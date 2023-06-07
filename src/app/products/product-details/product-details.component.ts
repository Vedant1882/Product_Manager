import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { ListComponent } from 'src/app/common/list/list.component';
import { CategoryService } from 'src/app/common/services/category.service';
import { PoductService } from 'src/app/common/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  @ViewChild('form') form: any;
  //@ViewChild(ListComponent) grid: ListComponent;
  allCategories:any=[];
  editMode: boolean = false;
  addMode: boolean = false;
  mode: boolean = false;
  dateFormate = AppConstants.dateFormat;
  productId=0;
  public editObj: Product = {
    id: 0,
    productName: "",
    manufrecturerName: "",
    productType: "",
    costPrice: 0,
    retailPrice: 0,
    categoryId:0,
    manufrecturingDate: new Date(),
    expiryDate: new Date(),
    imageUrl: "",
    name:""
  };
  constructor(private categoryService: CategoryService,private productService:PoductService,private router: Router,private route: ActivatedRoute) { 
  }
  ngOnInit(): void {
this.categoryService.getCategory().subscribe({
  next: (value: any) => {
    this.allCategories = value;
  },
  error(msg:any) {
    alert(msg);
  }
})
this.route.params.subscribe(params => {
  this.productId = params['id'];
});
if(Number(this.productId) > 0){
  this.productService.getProductById(this.productId).subscribe({
    next: (value: any) => {
      this.editObj.id=this.productId;
      this.editObj.name = value.name;
      this.editObj.productName=value.productName;
      this.editObj.manufrecturerName=value.manufecturerName;
      this.editObj.manufrecturingDate=value.manufrecturingDate;
      this.editObj.expiryDate=value.expiryDate;
      this.editObj.categoryId=value.categoryId;
      this.editObj.productType=value.productType;
      this.editObj.retailPrice=value.retailPrice;
      this.editObj.costPrice=value.costPrice;
      this.editObj.status=value.status;
      this.editMode=true;
    },
  })
}
  }
  save(item: Product) {
    item.name="s";
    item.imageUrl="s";
    item.status=true;
    this.productService.saveProduct(item).subscribe();
    //this.grid.refresh();
    this.router.navigate(['product']);
}

}
