import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  surveyToShow: any
  id: any
  loaded: boolean;
  option: any
  constructor(private _route: ActivatedRoute,
    private router: Router, private _httpService: HttpService) { }


  ngOnInit() {
    this.loaded = false
    this._route.params.subscribe((params: Params) => {
      this.id = params['id']
      this.option = {option: ""}
    })
    this.getSurvey()
  }
  getSurvey(){
    let observable = this._httpService.getOne(this.id)
    observable.subscribe(data => {
      this.loadSurvey(data)
    })
  }
  loadSurvey(data){
    this.surveyToShow = data
    this.loaded = true
  }
  castVote(data){
    this.option.option = data
    //console.log(this.option)
    let observable = this._httpService.sendVotes(this.id, this.option)
    observable.subscribe(data => this.loadSurvey(data))
  }
  }

