import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';

const DATA = [
  {"vm_name":"test","vm_state":3,"cdp_in_process":false,"deleted":false,"deprovision_status":false,"is_active":true,"zabbix_host_id":37938,"cdp_enabled":false,"plan":"C2.8GB-CentOS-7.5","ip_address_public":"164.52.193.125","terminate_vm_status":false,"vm_id":38112,"id":32374,"customer":7537,"agent_id":null,"vm_type":"vm","vcpu":2,"private_cloud_check":false,"label":"Default","scaler_id":null,"is_backup_notify_mail_sent":true,"ip_address_private":"172.16.114.70","lock_status":false,"memory":"8 GB","last_backup_time":null,"template_id":2630,"distro":"CentOS-7.5"},
  {"vm_name":"virtual","vm_state":4,"cdp_in_process":true,"deleted":false,"deprovision_status":false,"is_active":true,"zabbix_host_id":37939,"cdp_enabled":false,"plan":"C2.8GB-CentOS-7.5","ip_address_public":"164.52.193.125","terminate_vm_status":false,"vm_id":38112,"id":32375,"customer":7538,"agent_id":null,"vm_type":"vm","vcpu":2,"private_cloud_check":false,"label":"Default","scaler_id":null,"is_backup_notify_mail_sent":true,"ip_address_private":"172.16.114.70","lock_status":false,"memory":"8 GB","last_backup_time":null,"template_id":2630,"distro":"CentOS-7.5"}
];

/* const DATA = [
  { "id": 1, "name": "Mumtaz", "vm_name": "Ubunto" },
  { "id": 2, "name": "Sami", "vm_name": "Windows" }
]; */
let nodesObservable = of(DATA);


@Injectable()
export class NodeService {
  getNodes(): Observable<any>{
    return nodesObservable;
  }
  getNode(id: any): Observable<any> {
    return nodesObservable
      .map(nodes => nodes.find(node => node.id === id));
  }
 /*  getNodes(): Promise<any[]> {
    return nodesPromise;
  }
  getNode(id: any): Promise<any> {
    return nodesPromise
      .then(nodes => nodes.find(node => node.id === id));
      //.then(nodes => nodes.find(node => console.log('Type: ', typeof(id))));
      //.then(nodes => nodes.find(node => node.id === id)).then(nodes => console.log('aa',nodes));
  } */
}
