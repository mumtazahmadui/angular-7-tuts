import { Injectable } from '@angular/core';
import { Person } from '../person';

const PERSONS: Person[] = [
  {"personId": "1", "name": "Mumtaz", "city": "Faridabad"},
  {"personId": "2", "name": "Sami", "city": "Patna"}
];
let personsPromise = Promise.resolve(PERSONS);
let personsToDisplayPromise =
   Promise.resolve(PERSONS.concat({"personId": "3", "name": "Wasi", "city": "Govindpuri"}));

@Injectable()
export class PersonService { 
	getPersons(): Promise<Person[]> {
	    return personsToDisplayPromise;
	}
	getPerson(id: string): Promise<Person> {
      return personsPromise
        .then(persons => persons.find(person => person.personId === id));
  }	
}