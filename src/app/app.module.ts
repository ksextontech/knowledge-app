import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ManageCategoriesComponent } from './categories/manage-categories/manage-categories.component';

import { CategoryService } from './services/category.service';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryListItemComponent } from './categories/category-list-item/category-list-item.component';
import { CategoryCreateComponent } from './categories/category-create/category-create.component';
import { QuestionCreateComponent } from './questions/question-create/question-create.component';
import { ShortAnswerCreateComponent } from './answers/short-answer-create/short-answer-create.component';
import { QuestionService } from './services/question.service';
import { AnswerService } from './services/answer.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageCategoriesComponent,
    NavigationComponent,
    CategoryListComponent,
    CategoryListItemComponent,
    CategoryCreateComponent,
    QuestionCreateComponent,
    ShortAnswerCreateComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [
    CategoryService,
    QuestionService,
    AnswerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
