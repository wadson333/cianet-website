import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations:[
    trigger('navToggle',[

      state('toggleOff',style({
        transform:'translateY(-10px)',
        opacity:0,
        zIndex:-10,
        
      })),

      state('toggleOn',style({ 
        transform:'translateY(0)',
        opacity:1,
        zIndex:10,
      })),

      transition("toggleOff <=> toggleOn",[
        animate(300)
      ]
        
      )
    ])
  ]
})
export class NavBarComponent implements OnInit {

  constructor() { }
  state='toggleOff'
  toggleMenuB=false;
  toggleMenuIco={
    close:"fas fa-times",
    default:"fas fa-bars"
  }


  ngOnInit(): void {
  }
  
  toggleMenu(){
    this.toggleMenuB=!this.toggleMenuB; 
    this.state==="toggleOff"? this.state="toggleOn" : this.state="toggleOff";
    console.log(this.state)
  }

  closeNav(){
    if(this.toggleMenuB) this.toggleMenuB=false;
  }
}
