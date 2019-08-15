import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent }  from './page-not-found.component';

const routes: Routes = [
	{
	   path: '',
	   redirectTo: '/country/countryList',
	   pathMatch: 'full'
	},	
	{
	   path: 'country',
       loadChildren: './country/country.module#CountryModule'
	},
	{
	   path: 'person',
       loadChildren: './person/person.module#PersonModule'
	},
    {
	   path: '**',
	   component: PageNotFoundComponent 
	}
];

@NgModule({
  imports: [ 
      RouterModule.forRoot(routes) 
  ],
  exports: [ 
      RouterModule 
  ]
})
export class AppRoutingModule { } 