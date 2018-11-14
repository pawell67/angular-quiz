import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question} from '../model/question';

@Injectable({
    providedIn: 'root'
})
export class QuizService {
    readonly databaseUrl: string = 'https://angular-quiz-2b91b.firebaseio.com/users.json';
    readonly apiUrl: string = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple';

    public questions: Question[] = [];
    seconds: number;
    timer: number;
    public questionProgress = 0;

    constructor(private _httpClient: HttpClient) {
    }

    displayTimeElapsed() {
        return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
    }

    getParticipantName() {
        const participant = JSON.parse(localStorage.getItem('participant'));
        return participant.name;
    }

    insertParticipant(name: string, email: string) {
        const user = JSON.stringify({
            name,
            email
        });
        return this._httpClient.post(this.databaseUrl, JSON.parse(user));
    }

    getQuestions() {
        return this._httpClient.get(this.apiUrl);
    }
}
