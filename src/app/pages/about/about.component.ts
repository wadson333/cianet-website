import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pageLabel="À propos d'usi" 
  backgroundImage='bg-apropos'
  pageTitle="À propos nous" 
  constructor() { }

  ngOnInit(): void {
  }

}
