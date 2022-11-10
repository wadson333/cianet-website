import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  backgroundImage='bg-acceuil'
  date:any
  constructor(private scroll:ViewportScroller) { }

  ngOnInit(): void { 
  }
   
  scrollToAncor(){
    this.scroll.scrollToAnchor('directeur')
  }
}
