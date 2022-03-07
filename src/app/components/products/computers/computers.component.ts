import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

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
