import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable( {
	providedIn: 'root'
} )
export class AppService {
	private pageTextSource = new BehaviorSubject<string>( '' );

	pageText$ = this.pageTextSource.asObservable();

	setPageTextSource ( text: string ): void {
		this.pageTextSource.next( text );
	}
}
