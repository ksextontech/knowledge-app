import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.css']
})
export class CategorySelectComponent implements OnInit {
  private categories: Category[];
  private selectedCategoryId: string;
  @Output() categorySelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories()
      .subscribe(categories => this.categories = categories);
  }

  private onCategoryChange(data: any) {
    let categoryId: string = data.target.value;

    if (!categoryId || categoryId.length === 0) {
      categoryId = null;
    }

    this.selectedCategoryId = categoryId;
    this.categorySelected.emit(categoryId);
  }
}
