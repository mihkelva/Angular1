import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  userName = 'This is username';
  userNameField = "Here comes username";
  buttonDisabled = true;
  passwordShown = false;
  clicks = 0;
  clicksArray = [];

  constructor() { }

  ngOnInit(): void {
  }

  changeUsername(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
    this.isChangeUserName();
  }

  setUsername(){
    (<HTMLInputElement>document.getElementById("username-form")).value="";
    this.buttonDisabled=true;
  }

  isChangeUserName(){
    if((this.userName) === ""){
      this.buttonDisabled= true;
    } else {
      this.buttonDisabled= false;
    } 
    return this.buttonDisabled;
  }

  clicksCounter(){
    this.clicks = this.clicks +1;
    this.clicksArray.push(this.clicks);
    return this.clicks;
  }

}
