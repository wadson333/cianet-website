import { Component, ElementRef, Input, OnInit,AfterViewChecked, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header-picture',
  templateUrl: './header-picture.component.html',
  styleUrls: ['./header-picture.component.css']
})
export class HeaderPictureComponent implements OnInit,AfterViewInit {
  @Input() pageTitle=""
  @Input() backgroundImage=""
  @ViewChild("sectionTop",{static:false}) sectionTop!:ElementRef;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit():void{
   // this.sectionTop.nativeElement.classList.add=this.backgroundImage;
  }
  
}
