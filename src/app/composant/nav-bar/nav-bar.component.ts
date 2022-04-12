import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  toggleMenuB=false;
  toggleMenuIco={
    close:"fas fa-times",
    default:"fas fa-bars"
  }


  ngOnInit(): void {
  }
  
  toggleMenu(){
    this.toggleMenuB=!this.toggleMenuB;
  }

  closeNav(){
    if(this.toggleMenuB) this.toggleMenuB=false;
       
  }
}
