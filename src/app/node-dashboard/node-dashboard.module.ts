import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { NodeRoutingModule } from './node-routing.module';
import { NodeComponent } from './node.component';
import { NodeListComponent } from './node-list/node.list.component';
import { NodeDetailComponent } from './node-list/detail/node.detail.component';
import { NodeService } from './services/node.service';


@NgModule({
  imports: [
    CommonModule,
    NodeRoutingModule
  ],
  declarations: [ 
    NodeComponent, 
    NodeListComponent, 
    NodeDetailComponent 
  ],
  providers: [ NodeService ]
})
export class NodeDashboardModule { 
  constructor() {
    console.log('VCN module load >> 3');
  }
}
