import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../categories/model/category.model';
import { PaginatedResultModel } from '../shared/model/paginated-result.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { Question } from '../questions/model/question.model';

const API_BASE_URL = 'http://localhost:64514';

@Injectable()
export class QuestionService {

  questionCreated: EventEmitter<Question> = new EventEmitter<Question>();

  constructor(private httpClient: HttpClient) { }

  createQuestion(text: string): Observable<any> {
    const url = API_BASE_URL + '/questions';

    const body = {
      text: text
    };

    return this.httpClient.post(url, body).map((result: any) => {
      console.log(result);
      const question = new Question(result.id, result.text);
      this.questionCreated.emit(question);
      return question;
    });
  }
}
