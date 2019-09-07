import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { NodeService } from './services/node.service';
import { Observable } from 'rxjs';


@Injectable()
export class NodeDetailResolver implements Resolve<any> {

  constructor(private personService: NodeService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    let id = route.paramMap.get('id');
    console.log('Resolving for person id:' + typeof(+id));
    
    return this.personService.getNode(+id).map(node => {
      if (node) {
        return node;
      } else {
        this.router.navigate(['/vcn/list']);
        return null;
      }
    });

  }

  /* resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {

    let id = route.paramMap.get('id');
    console.log('Resolving for person id:' + typeof(+id));
    
    return this.personService.getNode(+id).then(node => {
      if (node) {
        return node;
      } else {
        this.router.navigate(['/vcn/list']);
        return null;
      }
    });

  } */
}