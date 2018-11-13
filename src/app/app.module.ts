import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule, RouterModule.forRoot(appRoutes), FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
