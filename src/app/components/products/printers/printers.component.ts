import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styleUrls: ['./printers.component.scss']
})
export class PrintersComponent implements OnInit {

  public products : any ;

  constructor( public catalogueService : CatalogueService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){
    this.catalogueService.getResources("/products").subscribe(res => {
      this.products = res;
    }, err => console.log(err));
  }

}
