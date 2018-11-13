import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: '/register', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent}
];
