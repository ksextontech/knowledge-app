import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../categories/model/category.model';
import { PaginatedResultModel } from '../shared/model/paginated-result.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { Answer } from '../questions/model/answer.model';

const API_BASE_URL = 'http://localhost:64514';

@Injectable()
export class AnswerService {

  answerCreated: EventEmitter<Answer> = new EventEmitter<Answer>();

  constructor(private httpClient: HttpClient) { }

  createAnswer(questionId: string, text: string): Observable<Answer> {
    const url = API_BASE_URL + '/answers';

    const body = {
      questionId: questionId,
      text: text
    };

    return this.httpClient.post(url, body).map((result: any) => {
      console.log(result);
      const answer = new Answer(result.id, questionId, result.text);
      this.answerCreated.emit(answer);
      return answer;
    });
  }
}
