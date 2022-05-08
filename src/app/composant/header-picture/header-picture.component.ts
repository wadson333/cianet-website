import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-picture',
  templateUrl: './header-picture.component.html',
  styleUrls: ['./header-picture.component.css']
})
export class HeaderPictureComponent implements OnInit {
  @Input() pageTitle=""
  @Input() backgroundImage=""

  constructor() { }

  ngOnInit(): void {
    
  }
  
}
