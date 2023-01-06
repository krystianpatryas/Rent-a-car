import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  constructor() {}

  ngOnInit(): void {}

  onSend() {
    alert('Wiadomość została wysłana!');
    this.form.reset();
  }
}
