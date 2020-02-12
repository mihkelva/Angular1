import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding2',
  templateUrl: './databinding2.component.html',
  styleUrls: ['./databinding2.component.css']
})
export class Databinding2Component implements OnInit {
  username = '';
  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

}
