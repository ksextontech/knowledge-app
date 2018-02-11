import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ManageCategoriesComponent } from './categories/manage-categories/manage-categories.component';

import { CategoryService } from './services/category.service';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryListItemComponent } from './categories/category-list-item/category-list-item.component';
import { CategoryCreateComponent } from './categories/category-create/category-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageCategoriesComponent,
    NavigationComponent,
    CategoryListComponent,
    CategoryListItemComponent,
    CategoryCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
