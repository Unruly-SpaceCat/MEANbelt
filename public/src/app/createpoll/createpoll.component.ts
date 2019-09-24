import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})
export class CreatepollComponent implements OnInit {
    name: any
    newsurvey: any
    questionerror: any
    option1error: any
    option2error: any
    option3error: any
    option4error: any
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.name = this._httpService.showname()
    this.newsurvey = { name: this.name, question: "", option1: "", option2: "", option3: "", option4: ""}
  }
  addnewsurvey(){
    //console.log(this.newsurvey)
    let observable = this._httpService.createnew(this.newsurvey)
    observable.subscribe(data => {
      this.resolve(data)
    })
  }
  resolve(data){
    //console.log(data)
    if(data.errors){
        if(data.errors.question){
          this.questionerror = data.errors.question.message
        }
        if(data.errors.option1){
          this.option1error =data.errors.option1.message
        }
        if(data.errors.option2){
          this.option2error =data.errors.option2.message
        }
        if(data.errors.option3){
          this.option3error =data.errors.option3.message
        }
        if(data.errors.option4){
          this.option4error =data.errors.option4.message
        }
        if(!data.errors.question){
          this.questionerror = ""
        }
        if(!data.errors.option1){
          this.option1error = ""
        }
        if(!data.errors.option2){
          this.option2error = ""
        }
        if(!data.errors.option3){
          this.option3error  = ""
        }
        if(!data.errors.option4){
          this.option4error = ""
        }
    }
    else {
      this.newsurvey = { question: "", option1: "", option2: "", option3: "", option4: ""}
      this.questionerror = ""
      this.option1error = ""
      this.option2error = ""
      this.option3error = ""
      this.option4error = ""
      return this.router.navigate(['/dashboard'])
    }
  }
}
