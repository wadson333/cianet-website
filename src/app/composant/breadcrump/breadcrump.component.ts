import { Component, Input, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.css']
})
export class BreadcrumpComponent implements OnInit {

  @Input() pageLabel=""

  constructor() { }

  ngOnInit(): void { 

  }

}
