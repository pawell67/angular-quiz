import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class QuizService {
    readonly apiUrl: string = '';

    constructor(private http: HttpClient) {
    }

    insertParticipant(name: string, email: string) {
        const body = {
            name,
            email
        };

        return this.http.post(this.apiUrl, body);
    }
}
