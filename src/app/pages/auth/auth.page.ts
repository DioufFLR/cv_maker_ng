import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  email: string = ''
  password: string = ''
  apiVersion: string = ''

  constructor(
    private alert: AlertController,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.checkConnection(localStorage.getItem('TOKEN')))
      this.router.navigateByUrl('home').catch((e) => {
        console.log(e)
      })
    else
      this.getInfo()
  }

  submitLogin(): void {
    this.login();
  }

  getInfo() : void {
    this.http.get(environment.apiUrl + '/api').subscribe((value: any) => {
      console.log('SUCCES', value)
      this.apiVersion = value.api_version
    }, (error: any) => {
      console.log(error)
    })
  }

  login(): void {
    this.http.post(environment.apiUrl + '/auth/login', {email: this.email, password: this.password}).subscribe((value: any) => {
      localStorage.setItem('TOKEN', value.token)
      localStorage.setItem('EXP', value.exp)
      localStorage.setItem('USERNAME', value.username)
      this.router.navigateByUrl('home').catch((e) => {
        console.log(e)
      })
    }, (error: any) => {
      console.log(error)
    })
  }

  checkConnection(token?: string): boolean {
    if (!token)
      return false
    else
      return true
  }
}
