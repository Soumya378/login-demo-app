import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit{
    username:string;
    password:string;

    isLoading = false;
    error: string = null;

    constructor(private router: Router) {}

    onSubmit(form: NgForm) {
        //console.log(form.value);
        //form.reset();
        if(!form.valid)
        {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        this.isLoading = true;

        if(email == "admin@vmware.com" && password == "admin@123") {
            console.log("Welcome");
            this.isLoading = false;
            this.router.navigate(['/welcome']);
        }
        else {
            this.router.navigate(['/error']);
        }

        form.reset();

    }

    ngOnInit() {
    }
}