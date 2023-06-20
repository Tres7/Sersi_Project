import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

/*universel*/
declare var window: any

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  formModalLogin: any
  formModalSignup: any

  ngOnInit() {
    /*Login*/
    this.formModalLogin = new window.bootstrap.Modal(document.getElementById("login")
    );
    this.loginForm = this.formBuilder.group({
      nom_ut: ['', Validators.required],
      password: ['', Validators.required]
    });

    /*Inscription*/
    this.formModalSignup = new window.bootstrap.Modal(document.getElementById("sign")
    );
    this.loginForm = this.formBuilder.group({
      nom_ut: ['', Validators.required],
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  openLogin(): void {
    this.formModalLogin.show();
    this.formModalSignup.hide();
  }

  openSign(): void {
    this.formModalSignup.show();
    this.formModalLogin.hide();
  }

  loginForm!: FormGroup;
  isSubmitted = false;

  constructor(private AuthentificationService: AuthentificationService,
    private router: Router, private formBuilder: FormBuilder) { }

  get formControls() { return this.loginForm.controls; }
  seConnecter() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.AuthentificationService.seConnecter(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }

}
