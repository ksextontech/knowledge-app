import { Component, OnInit, Input} from '@angular/core';
import { Category } from '../model/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list-item',
  templateUrl: './category-list-item.component.html',
  styleUrls: ['./category-list-item.component.css']
})
export class CategoryListItemComponent implements OnInit {

  @Input() category: Category;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {

  }
}
