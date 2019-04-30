import { Injectable } from '@angular/core';
import {Categories} from "./categories";
import {CategorieData} from "./categoriesData";
import * as _ from 'lodash';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
categories= CategorieData;
 pageCategories:any;
 private url="http://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  constructor(private http:HttpClient) { }

  getCategories(): Categories[]{
    return this.categories;
  }
  getCategories1():Observable<Categories[]>{
    return this.http.get<Categories[]>(this.url);
  }
  deleteCategorie(categorie: Categories): void {
    this.categories.splice(this.categories.indexOf(categorie), 1);
    console.log(this.categories);
  }

  getCategorieById(id): Categories {
    const index = _.findIndex(this.categories, (c: Categories) => {
      return c.id === id;
    });
    return this.categories[index];
  }

  addCategorie(categorie: Categories): void {
    categorie.id = + categorie.id;
    const index =  _.findIndex(this.categories, (c: Categories) => {
      return c.id === categorie.id;
    });
    if (index !== -1) {
      console.log('categorie exist');
    } else {
      const index2 = _.findIndex(this.categories, (c: Categories) => {
        return c.name === categorie.name;
      });
      if (index2 !== -1) {
        console.log('nom exist');
      } else {
        this.categories.push(categorie);
        console.log('succes push' + this.categories);
      }
    }
  }

  updateCategorie(categorie: Categories): void {
    const index = _.findIndex(this.categories, (p: Categories) => {
      return p.id === categorie.id;
    });
    this.categories[index] = categorie;
  }
}
