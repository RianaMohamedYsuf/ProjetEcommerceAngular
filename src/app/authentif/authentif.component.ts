import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-authentif',
  templateUrl: './authentif.component.html',
  styleUrls: ['./authentif.component.css']
})
export class AuthentifComponent implements OnInit {

  username!:string;
  password!:string;
  errorMessage = 'login pass incorrect'
  invalidLogin = false

  constructor(private router:Router,private basicAuthenticationService:AuthServiceService ) { }

  ngOnInit(): void {
  }

  login() {
    
    this.basicAuthenticationService.authentification(this.username, this.password)
        .subscribe(
          data => {
            //console.log(data.jwt);
            sessionStorage.setItem('t','Bearer '+data.jwt)
            console.log(sessionStorage.getItem('t'));
            this.router.navigateByUrl('');
            this.invalidLogin = false      
          },
          error => {
            console.log('kkkkkkkkkkkkkkkkkkkkkkkkko')
            this.invalidLogin = true
          }
        )
  }

  createBasicHttpHeader()
  {
   
    let basicchaine='Basic '+window.btoa(this.username+':'+this.password);
    return basicchaine;
  }

}
