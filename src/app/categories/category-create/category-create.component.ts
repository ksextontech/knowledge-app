import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  name: string = null;
  private parentCategoryId: string = null;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {

  }

  private onFormSubmit(form: any) {
    this.name = form.value.name;
    const parentCategoryIds = [this.parentCategoryId];
    console.log(parentCategoryIds);

    this.categoryService.createCategory(this.name, parentCategoryIds).subscribe(result => {
      form.reset();
    });
  }

  private onCategorySelected(categoryId: string) {
    this.parentCategoryId = categoryId;
  }
}
