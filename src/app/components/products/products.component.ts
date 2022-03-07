import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products : any ;


  constructor(public catalogService : CatalogueService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){
    this.catalogService.getResources("/products").subscribe(res => {
      this.products = res;
    }, err => console.log(err));
  }

}
