import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from '../../services/answer.service';

declare let CodeMirror;

@Component({
  selector: 'app-short-answer-create',
  templateUrl: './short-answer-create.component.html',
  styleUrls: ['./short-answer-create.component.css']
})
export class ShortAnswerCreateComponent implements OnInit {

  private questionId: string;

  private options: Object = {
    placeHolderText: 'Hello World!',
    charCharacterCount: true,
    toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
    'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|',
    'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
    'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|',
    'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|',
    'print', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
    codeMirror: CodeMirror,
    codeMirrorOptions: {
      indentWithTabs: true,
      lineNumbers: true,
      lineWrapping: true,
      mode: 'text/html',
      tabMode: 'indent',
      tabSize: 2
    },
    fontFamily: {
      'Arial,Helvetica,sans-serif': 'Arial',
      'Georgia,serif': 'Georgia',
      'Impact,Charcoal,sans-serif': 'Impact',
      'Tahoma,Geneva,sans-serif': 'Tahoma',
      '\'Times New Roman\',Times,serif': 'Times New Roman',
      'Verdana,Geneva,sans-serif': 'Verdana',
      'Consolas,sans-serif': 'Consolas'
    },
    paragraphStyles: {
      'no-margin': 'No Margins',
      'fr-text-gray': 'Gray',
      'fr-text-bordered': 'Bordered',
      'fr-text-spaced': 'Spaced',
      'fr-text-uppercase': 'Uppercase'
    }
  };

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
