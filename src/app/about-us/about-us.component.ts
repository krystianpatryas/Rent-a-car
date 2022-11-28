import { BinaryOperatorExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  emailValue: string;
  constructor() { }

  ngOnInit(): void {
  }

   goToTop() {}

  subscribe() {
    const paragraph = document.getElementById('sub-text');
    if (paragraph != null) {
      paragraph.classList.toggle('display');
      this.emailValue = '';
    }

  }

}
