import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { ListComponent } from 'src/app/common/list/list.component';
import { CategoryService } from 'src/app/common/services/category.service';
import { LoaderService } from 'src/app/common/services/loader';
import { PoductService } from 'src/app/common/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild('form') form: any;
  //@ViewChild(ListComponent) grid: ListComponent;
  allCategories: any = [];
  trueValue:boolean=true;
  falseValue:boolean=false;
  editMode: boolean = false;
  addMode: boolean = false;
  mode: boolean = false;
  selectedFile: File;
  dateFormate = AppConstants.dateFormat;
  productId = 0;
  public editObj: Product = {
    id: 0,
    productName: "",
    manufrecturerName: "",
    productType: "",
    costPrice: 0,
    retailPrice: 0,
    categoryId: 0,
    manufrecturingDate: new Date(),
    expiryDate: new Date(),
    imageUrl: "",
    name: ""
  };
  constructor(private categoryService: CategoryService, private productService: PoductService, private router: Router, private route: ActivatedRoute,readonly snackBar: MatSnackBar,public loader: LoaderService) {
  }
  ngOnInit(): void {
    this.categoryService.getCategory().subscribe({
      next: (value: any) => {
        this.allCategories = value;
      },
      error(msg: any) {
        alert(msg);
      }
    })
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });
    if (Number(this.productId) > 0) {
      this.productService.getProductById(this.productId).subscribe({
        next: (value: any) => {
          console.log(value);
          this.editObj.id = this.productId;
          this.editObj.name = value.name;
          this.editObj.productName = value.productName;
          this.editObj.manufrecturerName = value.manufecturerName;
          this.editObj.manufrecturingDate = value.manufrecturingDate;
          this.editObj.expiryDate = value.expiryDate;
          this.editObj.categoryId = value.categoryId;
          this.editObj.productType = value.productType;
          this.editObj.retailPrice = value.retailPrice;
          this.editObj.costPrice = value.costPrice;
          this.editObj.status = value.status;
          this.editMode = true;
        },
      })
    }
  }
  save(item: Product) {
    if(this.selectedFile){
      this.saveImage();
    }
    item.name = "s";
    item.imageUrl =this.selectedFile.name;
    item.status = true;
    this.productService.saveProduct(item).subscribe();
    //this.grid.refresh();
    this.router.navigate(['product']);
  }
  saveImage(){
    debugger;
    const formData = new FormData();
    formData.append("image", this.selectedFile);
    this.productService.uploadImages(formData).subscribe({
      next: (value: any) => {
        this.snackBar.open("File uploaded succesfully", 'Close', {
          duration: 3000,
        });
      },
      error(msg) {
        alert(msg);
      }
      
    });
  }
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }
  routeTo(){
    this.router.navigate(['product']);
  }
}
