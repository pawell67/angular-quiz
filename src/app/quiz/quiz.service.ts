import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class QuizService {
    readonly apiUrl: string = 'https://angular-quiz-2b91b.firebaseio.com/users.json';

    constructor(private _httpClient: HttpClient) {
    }

    insertParticipant(name: string, email: string) {
        const user = JSON.stringify({
            name,
            email
        });
        return this._httpClient.post(this.apiUrl, JSON.parse(user));
    }
}
