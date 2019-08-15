import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../person';

@Component({
  templateUrl: './person.list.component.html' 
})
export class PersonListComponent implements OnInit { 
  persons: Promise<Person[]>;
  constructor(private personService: PersonService) { }
  ngOnInit() {
    this.persons = this.personService.getPersons();
  }	
}