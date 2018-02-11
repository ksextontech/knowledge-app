import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  name: string = null;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {

  }

  private onFormSubmit(form: any) {
    this.name = form.value.name;

    this.categoryService.createCategory(this.name, []).subscribe(result => {
      form.reset();
    });
  }
}
