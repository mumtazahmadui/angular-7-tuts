import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NodeComponent } from './node.component';
import { NodeDetailComponent } from './node-list/detail/node.detail.component';
import { NodeDetailResolver } from './node-detail.resolver';
import { NodeListComponent } from './node-list/node.list.component';

const nodeRoutes: Routes = [
  {
    path: '',
    redirectTo: '/vcn/list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: NodeComponent,
    children: [
      {
        path: 'list',
        component: NodeListComponent,
        children: [
		      {
						path: ':id',
						component: NodeDetailComponent,
						resolve: {
							nodeDetail: NodeDetailResolver
						}
			    }
		    ]	
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(nodeRoutes)],
  exports: [RouterModule],
  providers: [ NodeDetailResolver ]
})
export class NodeRoutingModule {}
