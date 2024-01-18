import { Component } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component( {
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: [ './layout.component.css' ]
} )
export class LayoutComponent {

	ShowSidebar: boolean = false;
	pageText: string = '';

	constructor ( private appService: AppService ) { }

	ngOnInit (): void {
		this.appService.pageText$.subscribe( ( text ) => {
			this.pageText = text;
		} );
	}
}
