import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() title:string="accodion";
  @Input() altTitle:string="";

  accordionData={
    toggle:false,
    iconUp:"fa-solid fa-chevron-up",
    iconDown:"fa-solid fa-chevron-down"
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  toggleUpOrDown(){
    this.accordionData.toggle=!this.accordionData.toggle;
  }

}
