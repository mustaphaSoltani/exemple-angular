import {Component, OnInit, ViewChild} from '@angular/core';
import {Categories} from "../categories";
import {CategorieService} from "../categorie.service";
import {MatSort, MatSortable, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categories[];
  pered: String;
  elements: any = [];
  constructor(private categorieService: CategorieService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categories = this.categorieService.getCategories();
  }

  removeCategorie(categorie: Categories) {
    this.categorieService.deleteCategorie(categorie);
  }

  Search() {
    if (this.pered != "") {
      this.categories = this.categories.filter(res => {
        return res.name.toLocaleLowerCase().match(this.pered.toLocaleLowerCase());
      });
    }else if (this.pered == ""){
      this.ngOnInit();
    }
  }
}
