import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuizService} from './quiz.service';
import shuffle from '../utils';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    constructor(private _router: Router, public _quizService: QuizService) {
    }

    ngOnInit() {
        this._quizService.seconds = 0;
        this._quizService.questionProgress = 0;
        this._quizService.getQuestions().subscribe(
            (data: any) => {
                data.results.map((result) => {
                    const question = {};
                    question['answers'] = shuffle(result.incorrect_answers.concat(result.correct_answer));
                    question['correct'] = result.correct_answer;
                    question['question'] = result.question;
                    this._quizService.questions.push(question);
                });
                this.startTimer();
            }
        );
    }

    startTimer() {
        this._quizService.timer = setInterval(() => {
            this._quizService.seconds++;
        }, 1000);
    }

    answerQuestion(question: any, i: number) {
        console.log(question, i);
    }
}
