import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    error = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router
      ) { }

    ngOnInit() {
       
    }

    login() {
      
        this.loading = true;
        const user = JSON.parse(localStorage.getItem('user'));
      if(user.email === this.model.username && user.password === this.model.password)
      {
        this.loading = false;
        this.router.navigate(['/home']);
      }
      else 
      {
        alert('Username/Password does not match')
      }
       
    }
}
