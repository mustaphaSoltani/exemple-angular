import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategorieService} from "../categorie.service";
import {Location} from '@angular/common';
import {Categories} from "../categories";

@Component({
  selector: 'app-add-or-edit-categorie',
  templateUrl: './add-or-edit-categorie.component.html',
  styleUrls: ['./add-or-edit-categorie.component.css']
})
export class AddOrEditCategorieComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('id');
  test = !isNaN(this.id);
  newOrEditedCategorie: any = {};
  constructor( public categorieService: CategorieService, private route: ActivatedRoute, private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  saveOrEditCategorie(categorie: Categories) {
    if (isNaN(this.id) === false) {
      this.updateCategorie();
    } else {
      this.saveCategorie(categorie);
    }
    this.goBack();
  }

  saveCategorie(categorie: Categories) {
    this.categorieService.addCategorie(categorie);
  }

  updateCategorie() {
    this.categorieService.updateCategorie(this.newOrEditedCategorie);
  }

  getSalarie(): void {
    console.log(this.id);
    this.newOrEditedCategorie = this.categorieService.getCategorieById(this.id);
  }

  ngOnInit() {
    if (!isNaN(this.id)) {
      this.getSalarie();
    }
  }

}
