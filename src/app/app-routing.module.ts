import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManageCategoriesComponent } from './categories/manage-categories/manage-categories.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: '', component: ManageCategoriesComponent },
      { path: 'categories', component: ManageCategoriesComponent }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
