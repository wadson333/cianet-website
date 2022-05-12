import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { AccordionLinkComponent } from './accordion-link/accordion-link.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit,AfterContentInit{
  // get the  all the accortion children of type accordion-link 
  @ContentChildren(AccordionLinkComponent) accordionLinks!: QueryList<AccordionLinkComponent>;

  constructor() { }
  
  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
  //  trasform te element in a table and subscribe to the toggle event of each accordion-link item
  this.accordionLinks.toArray()[0].toggleOpen=true;
   this.accordionLinks.toArray().forEach((li: AccordionLinkComponent) => {
     li.toggle.subscribe((open) => {
       this.openLink(li,open);
     });
   });
  }
  
  // close all the open accordion link and open the one that we click on
  openLink(accordionLink: AccordionLinkComponent,open:boolean) {
    this.accordionLinks.toArray().forEach(li => li.toggleOpen = false);
    accordionLink.toggleOpen = open;
  }

}
