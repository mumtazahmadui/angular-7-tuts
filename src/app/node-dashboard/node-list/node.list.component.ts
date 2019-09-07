import { Component, OnInit } from '@angular/core';
import { NodeService } from '../services/node.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './node.list.component.html'
})
export class NodeListComponent implements OnInit {
  nodes: Observable<any[]>;
  
  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.nodes = this.nodeService.getNodes();
    console.log('node :: ', this.nodes)
  }
}

/* import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  templateUrl: './node.list.component.html'
})
export class NodeListComponent implements OnInit {
  persons: Promise<any[]>;
  constructor(private personService: PersonService) { }
  ngOnInit() {
    this.persons = this.personService.getPersons();
  }
} */