import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { AccordionLinkComponent } from './accordion-link/accordion-link.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit,AfterContentInit{
  @ContentChildren(AccordionLinkComponent) accordionLinks!: QueryList<AccordionLinkComponent>;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
   this.accordionLinks.toArray().forEach((li: AccordionLinkComponent) => {
     li.toggle.subscribe((open) => {
       this.openLink(li,open);
     });
   });
  }
  
  openLink(accordionLink: AccordionLinkComponent,open:boolean) {
    this.accordionLinks.toArray().forEach(li => li.toggleOpen = false);
    accordionLink.toggleOpen = open;
  }

}
