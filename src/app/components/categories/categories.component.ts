import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories : any;


  constructor(public catalogueService : CatalogueService , public router : Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories(){
    this.catalogueService.getResources("/categories").subscribe(res => {
      this.categories = res ;

    } , err => console.log(err)) ;
  }


}
