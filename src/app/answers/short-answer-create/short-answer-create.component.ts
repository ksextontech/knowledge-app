import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from '../../services/answer.service';

@Component({
  selector: 'app-short-answer-create',
  templateUrl: './short-answer-create.component.html',
  styleUrls: ['./short-answer-create.component.css']
})
export class ShortAnswerCreateComponent implements OnInit {

  private questionId: string;

  constructor(private route: ActivatedRoute, private router: Router, private answerService: AnswerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.questionId = params['questionId'];
      console.log(this.questionId);
    });
  }

  private onFormSubmit(form: any) {
    const text = form.value.text;
    console.log(text);

    this.answerService.createAnswer(this.questionId, text).subscribe(result => {
      console.log(result);
      this.router.navigate(['/']);
    });
  }
}
