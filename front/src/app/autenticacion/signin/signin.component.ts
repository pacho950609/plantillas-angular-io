import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  usuario : string ;
  contrasenia : string ;

  constructor() 
  {  
  }

  signin()
  {
    console.log(this.usuario + this.contrasenia);
  }

  ngOnInit() 
  {
  }

}
