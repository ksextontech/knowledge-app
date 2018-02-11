import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManageCategoriesComponent } from './categories/manage-categories/manage-categories.component';
import { QuestionCreateComponent } from './questions/question-create/question-create.component';
import { ShortAnswerCreateComponent } from './answers/short-answer-create/short-answer-create.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: '', component: ManageCategoriesComponent },
      { path: 'categories', component: ManageCategoriesComponent },
      { path: 'questions/create', component: QuestionCreateComponent },
      { path: 'answers/create/:questionId', component: ShortAnswerCreateComponent }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
