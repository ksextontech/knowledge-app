import { Component, OnInit } from '@angular/core';
import { Question } from '../questions/model/question.model';
import { Answer } from '../questions/model/answer.model';
import { QuestionService } from '../services/question.service';
import { AnswerService } from '../services/answer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private question: Question;
  private answer: Answer;
  private showAnswer = false;

  constructor(private questionService: QuestionService, private answerService: AnswerService) { }

  ngOnInit() {
  }

  private onRandomQuestionClick() {
    this.showAnswer = false;
    this.questionService.getRandomQuestion().subscribe(question => {
      this.question = question;
    });
  }

  private onFocusedQuestionClick() {
    this.showAnswer = false;
    this.questionService.getFocusedQuestion().subscribe(question => {
      this.question = question;
    });
  }

  private onShowAnswerClick() {
    this.showAnswer = true;
    this.answerService.getAnswerFor(this.question.id).subscribe(answer => {
      this.answer = answer;
    });
  }

  private onCorrectlyAnswered() {
    this.questionService.markAsAnswered(this.question.id, true).subscribe(result => {
      if (result) {
        this.reset();
      }
    });
  }

  private onIncorrectlyAnswered() {
    this.questionService.markAsAnswered(this.question.id, false).subscribe(result => {
      if (result) {
        this.reset();
      }
    });
  }

  private reset() {
    this.question = null;
    this.answer = null;
    this.showAnswer = false;
  }

}
