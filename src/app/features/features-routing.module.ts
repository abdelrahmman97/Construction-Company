import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsPageComponent } from './components/contact-us-page/contact-us-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const featureRoutes: Routes = [
	{ path: "", component: MainPageComponent },
	{ path: "index", component: MainPageComponent },
	{ path: "home", component: MainPageComponent },
	{
		path: "",
		component: LayoutComponent,
		children: [
			{ path: 'contact-us', component: ContactUsPageComponent },
		]
	},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule( {
	imports: [ RouterModule.forChild( featureRoutes ) ],
	exports: [ RouterModule ],
} )
export class FeaturesRoutingModule { }
