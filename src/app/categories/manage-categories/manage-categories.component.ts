import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {

  private page = 1;
  private pageSize = 25;
  private categories: Category[];
  private totalCount: number;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();

    this.categoryService.categoryCreated.subscribe(() => {
      this.getCategories();
    });
  }

  private getCategories() {
    this.categoryService.getCategories(this.page, this.pageSize, null).subscribe(result => {
      this.totalCount = result.totalCount;
      this.categories = result.data;
    });
  }

}
