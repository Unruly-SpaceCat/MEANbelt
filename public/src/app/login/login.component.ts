import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: any;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }
  savename(value){
    this.name = value
    //console.log(this.name)
  }
  login(){
    //console.log("button clicked")
    this._httpService.savename(this.name)
    this.redirect()
  }
  redirect(){
    this.router.navigate(['/dashboard'])
  }
}
