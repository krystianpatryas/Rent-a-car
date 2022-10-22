import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

   goToTop() {}


ngDoCheck() {

  document.addEventListener("DOMContentLoaded", function(){
    const el_autohide = document.querySelector('.autohide');

     const navbar_height  = <HTMLElement>document.querySelector('.navbar') ;
     const navoff = navbar_height.offsetHeight

     if(el_autohide){
       let last_scroll_top = 0;
       window.addEventListener('scroll', function() {
             let scroll_top = window.scrollY;
            if(scroll_top < last_scroll_top) {
                 el_autohide.classList.remove('scrolled-down');
                 el_autohide.classList.add('scrolled-up');
             }
             else {
                 el_autohide.classList.remove('scrolled-up');
                 el_autohide.classList.add('scrolled-down');
             }
             last_scroll_top = scroll_top;
       });
     }
    });
}



}
