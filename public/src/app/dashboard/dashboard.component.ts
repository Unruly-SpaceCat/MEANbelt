import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ConstantPool } from '@angular/compiler';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allsurveys: any;
  loaded: boolean;
  name: any
  showOneSurvey: any
  oneUser: boolean
  showOneUser: any
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.loaded = false;
    this.getallsurveys()
    this.getname()
    this.showOneUser = []
    this.oneUser = false
  }
  getname(){
    this.name = this._httpService.showname()
  }
  getallsurveys(){
    let observable = this._httpService.getsurveys()
    observable.subscribe(data => {
      this.loadsurveys(data)
    })
  }
  loadsurveys(data){
    this.allsurveys = data
    this.loaded = true
  }
  logout(){
    this._httpService.logout()
    this.redirect()
  }
  redirect(){
    this.router.navigate(['/'])
  }
  delete(id){
    let observable = this._httpService.deleteOne(id)
    observable.subscribe(data => {
      this.getallsurveys()
    })
  }
  findsurveys(data){
    if(data === ""){
      this.loaded = true
      this.oneUser= false
      this.showOneUser = []
    }
    for(var survey in this.allsurveys){
      if(data === this.allsurveys[survey].name){
        console.log("found one")
        this.showOneUser.push(this.allsurveys[survey])
      }
    }
    console.log(this.showOneUser)
    if(this.showOneUser.length >=1){
      this.oneUser = true
      this.loaded = false
    }
  }
}
