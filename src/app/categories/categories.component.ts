import { Component, OnInit } from '@angular/core';
import {Categories} from "../categories";
import {CategorieService} from "../categorie.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories: Categories[];
  constructor( private categorieService: CategorieService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories(): void {
    this.categories = this.categorieService.getCategories();
  }
  removeCategorie(categorie: Categories) {
    this.categorieService.deleteCategorie(categorie);
  }
}
