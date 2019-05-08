import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
    // { path: '', redirectTo: "/login", pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path:'home',component: HomeComponent},
    // otherwise redirect to login
    // { path: '**', redirectTo: '/login' }
    
];

export const Routing = RouterModule.forRoot(appRoutes);
