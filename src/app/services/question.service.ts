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

  createQuestion(text: string, categoryId: string): Observable<any> {
    const url = API_BASE_URL + '/questions';

    const body: any = {
      text: text,
    };

    if (categoryId) {
      body.categoryId = categoryId;
    }

    return this.httpClient.post(url, body).map((result: any) => {
      console.log(result);
      const question = new Question(result.id, result.text);
      this.questionCreated.emit(question);
      return question;
    });
  }

  getRandomQuestion(): Observable<Question> {
    const url = API_BASE_URL + '/questions/random';

    return this.httpClient.get(url).map((response: any) => {
      const question = new Question(response.id, response.text);
      return question;
    });
  }

  getFocusedQuestion(): Observable<Question> {
    const url = API_BASE_URL + '/questions/focused';

    return this.httpClient.get(url).map((response: any) => {
      const question = new Question(response.id, response.text);
      return question;
    });
  }

  markAsAnswered(questionId: string, correctlyAnswered: boolean): Observable<boolean> {
    const url = API_BASE_URL + `/answered-questions/${questionId}`;

    const body = {
      correctlyAnswered: correctlyAnswered
    };

    return this.httpClient.post(url, body).map(result => {
      return true;
    });
  }
}
