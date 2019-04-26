import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesComponent} from "./categories/categories.component";
import {AddOrEditCategorieComponent} from "./add-or-edit-categorie/add-or-edit-categorie.component";


const routes: Routes = [
  {path: 'list-categories', component: CategoriesComponent},
  {path: 'categorie/:id', component: AddOrEditCategorieComponent},
  { path: 'categorie/add', component: AddOrEditCategorieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
