import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {QuizComponent} from './quiz/quiz.component';
import {QuizService} from './quiz/quiz.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        QuizComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule, RouterModule.forRoot(appRoutes), FormsModule
    ],
    providers: [QuizService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
