import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      MotDePasse: ['', Validators.required],
    })
  }
  
  submitForm() {
    this.service.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
        if (response.jwt != null) {
          localStorage.setItem("role",response.role);
          console.log(response.role);
          alert("Hello, Your token is " + response.jwt);
          const jwtToken = response.jwt;
          localStorage.setItem('jwt', jwtToken);
          this.router.navigateByUrl("home");
      
      }},
      (error)=>{
        alert("Email ou mot de passe incorrect ! " );
      }
      )
    
  }
  onSignupClick() {
    this.router.navigate(['/signup']);
  }
  
}
