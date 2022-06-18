import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  username: string
  email: string
  name: string

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('USERNAME')
    this.getUserByUsername(this.username)
  }

  getUserByUsername(username: string): void {
    let headers: HttpHeaders = new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('TOKEN')
      }
    )

    this.http.get(environment.apiUrl + '/users/' + username, {headers: headers}).subscribe((value: any) => {
      this.email = value.email
      this.name = value.name
    }, (error: any) => {
      console.log(error)
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl('auth').catch(e => console.log(e))
  }
}
