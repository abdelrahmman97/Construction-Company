import { Component } from '@angular/core';

@Component( {
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: [ './footer.component.css' ]
} )
export class FooterComponent {
	currentYear: string = new Date().getFullYear().toString();

	whatsapp: string = "0553341625";
	facebook: string = "";
	twitter: string = "";
}
