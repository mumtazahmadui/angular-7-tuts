import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NodeService } from '../../services/node.service';

@Component({
  templateUrl: './node.detail.component.html' 
}) 
export class NodeDetailComponent implements OnInit { 
  node;
	constructor( 
		private nodeService: NodeService,
		private route: ActivatedRoute) { }
		
    ngOnInit() {

      this.route.paramMap.subscribe(param => {
        alert(param.get('id'));
        this.nodeService.getNode(+param.get('id')).subscribe(node => this.node = node);
      })

  	}		
}
