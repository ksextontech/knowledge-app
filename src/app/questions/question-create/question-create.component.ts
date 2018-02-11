import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { QuestionService } from '../../services/question.service';
import { Router } from '@angular/router';

declare let CodeMirror;

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent implements OnInit {

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
    }
  };

  private categoryId: string = null;

  constructor(private categoryService: CategoryService, private questionService: QuestionService, private router: Router) { }

  ngOnInit() {
  }

  private onFormSubmit(form: any) {
    const text = form.value.text;
    console.log(text);

    this.questionService.createQuestion(text, this.categoryId).subscribe(result => {
      console.log(result);
      this.router.navigate(['/answers/create/' + result.id]);
    });
  }

  private onCategorySelected(categoryId) {
    console.log(categoryId);
    this.categoryId = categoryId;
  }
}
