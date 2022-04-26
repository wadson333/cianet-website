import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  pageLabel="L'equipe d'usi"
  backgroundImage='bg-equipe'
  pageTitle="Nos équipes"

  constructor() { }

  ngOnInit(): void {
  }

}
