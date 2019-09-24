import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  loggedin: any
  constructor(private _http: HttpClient) { }
  savename(name){
    this.loggedin = name
    //console.log("service logged in", this.loggedin)
  }
  showname(){
    return this.loggedin
  }
  getsurveys(){
    return this._http.get('/allsurveys')
  }
  logout(){
    this.loggedin = ""
    //console.log("service logged out")
  }
  createnew(data) {
    return this._http.post('/survey/new', data)
  }
  deleteOne(id){
    return this._http.delete('/survey/edit/' + id)
  }
  getOne(id){
    return this._http.get('/survey/' + id)
  }
  sendVotes(id, data){
    return this._http.put('/survey/edit/' + id, data)
  }
}
