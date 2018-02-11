import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../categories/model/category.model';
import { PaginatedResultModel } from '../shared/model/paginated-result.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

const API_BASE_URL = 'http://localhost:64514';

@Injectable()
export class CategoryService {

  categoryCreated: EventEmitter<Category> = new EventEmitter<Category>();

  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    const url = API_BASE_URL + '/categories';

    return this.httpClient.get(url).map((result: any) => {
      const categories = <Category[]>result;
      return categories;
    });
  }

  getCategories(page: number, pageSize: number, categoryName: string): Observable<PaginatedResultModel<Category>> {

    let url = API_BASE_URL + `/categories?page=${page}&pageSize=${pageSize}`;

    if (categoryName) {
      url += `'&categoryName=${categoryName}`;
    }

    return this.httpClient.get(url).map((result: any) => {
      const totalCount = result.totalCount;
      const data = <Category[]>result.data;

      const paginatedResult = new PaginatedResultModel(data, totalCount);

      return paginatedResult;
    });
  }

  getSubCategories(id: string, page: number, pageSize: number): Observable<PaginatedResultModel<Category>> {
    const url = API_BASE_URL + `/subcategories?categoryId=${id}&page=${page}&pageSize=${pageSize}`;

    return this.httpClient.get(url).map((result: any) => {
      const totalCount = result.totalCount;
      const data = <Category[]>result.data;

      const paginatedResult = new PaginatedResultModel(data, totalCount);

      return paginatedResult;
    });
  }

  createCategory(name: string, parentCategoryIds: string[] = []): Observable<any> {
    const url = API_BASE_URL + '/categories';

    const body = {
      name: name,
      parentCategoryIds: parentCategoryIds
    };

    return this.httpClient.post(url, body).map((result: any) => {
      this.categoryCreated.emit(new Category(result.id, result.name, result.dateCreated));
    });
  }
}
