
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})



export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router
) { }

    register() {
        this.loading = true;
        let userList = localStorage.getItem("userList") ? JSON.parse(localStorage.getItem("userList")) : []; 

        console.log("Data to register user : ", this.model);

        if (this.model.email && this.model.firstName && this.model.mobileNo && this.model.password && this.model.confirmPassword) {


            if(this.validateEmail(this.model.email)){
                alert("Please enter valid email id.");
                return;
              }

            if (this.model.password !== this.model.confirmPassword) {
                alert("Confirm password does not match.");
                return;
            }
            localStorage.setItem('user',JSON.stringify(this.model));
            userList.push(this.model);
            localStorage.setItem('userList',JSON.stringify(userList));
            alert('Registration successful');
            this.router.navigate(['/login']);
    
        } else {
            alert("Please enter all mandatory fields.");
        }

    }

    keyPressChar(event: any) {
        const pattern = /[a-zA-Z\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return !re.test(email);
    }
    

}
