import { Component, OnInit,Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() goToTop() {
    document.documentElement.scrollTop = 0;
  }

  }
