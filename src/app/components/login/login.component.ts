import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  email: any;
  password: any;

  ngOnInit(): void {
  }
    login(){
      if(this.email=="sandra.czolczynska@gmail.com" && this.password=="12345" ){
        alert('Poprawne logowanie')
      }else {
        alert ('Błędny login lub hasło')
      }
    }
}
