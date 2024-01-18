import { Component } from '@angular/core';

@Component( {
	selector: 'app-services-section',
	templateUrl: './services-section.component.html',
	styleUrls: [ './services-section.component.css' ]
} )
export class ServicesSectionComponent {
	services = [
		{
			"name": "المقاولات",
			"image": "./assets/images/image-15.jpg"
		},
		{
			"name": "أعمال الأسفلت",
			"image": "./assets/images/image-8.jpg"
		},
		{
			"name": "التكسير",
			"image": "./assets/images/image-12.jpg"
		},
		{
			"name": "اللياسة",
			"image": "./assets/images/image-16.jpg"
		},
		{
			"name": "السباكة",
			"image": "./assets/images/image-13.jpg"
		},
		{
			"name": "الصبغ",
			"image": "./assets/images/image-14.jpg"
		}
	];
}
