import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-link',
  templateUrl: './accordion-link.component.html',
  styleUrls: ['./accordion-link.component.css'],
  
  // animation use whe sow and hide the accordion content
  animations:[
    trigger('accordionToggle',[

      state('toggleOn',style({ 
        opacity:1,
        transform:'translateY(0)',
      })),

      transition("void => *",[
        style({
          opacity:0,
          transform:'translateY(-1px)',
        }),
        animate(300)] 
      ),
    ])
  ]
})
export class AccordionLinkComponent implements OnInit {

  @Output() toggle=new EventEmitter<boolean>();
  @Input() title=''
  @Input() toggleOpen=false
  constructor() { }

  ngOnInit(): void {
  }

  // event that toggle the accordion link content and emit a custum event to the acoordion component 
  toggleUpOrDown(){
    this.toggleOpen=!this.toggleOpen;
    this.toggle.emit(this.toggleOpen);  
  }

}
