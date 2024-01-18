import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component( {
	selector: 'app-contact-us-page',
	templateUrl: './contact-us-page.component.html',
	styleUrls: [ './contact-us-page.component.css' ]
} )
export class ContactUsPageComponent {
	text: string = "تواصل معنا";

	constructor ( private appService: AppService ) { }

	ngOnInit (): void {
		this.appService.setPageTextSource( this.text );
	}
}
