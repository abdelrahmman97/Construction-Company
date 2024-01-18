import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ContactUsPageComponent } from './components/contact-us-page/contact-us-page.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ContactUsSectionComponent } from './components/contact-us-section/contact-us-section.component';

@NgModule( {
	declarations: [
		HeaderComponent,
		HeroSectionComponent,
		AboutUsSectionComponent,
		ServicesSectionComponent,
		ContactUsPageComponent,
		LayoutComponent,
		MainPageComponent,
		FooterComponent,
  ProjectsSectionComponent,
  ContactUsSectionComponent,
	],
	exports: [
		HeaderComponent,
		HeroSectionComponent,
		AboutUsSectionComponent,
		ServicesSectionComponent,
		ContactUsPageComponent
	],
	imports: [
		CommonModule,
		FeaturesRoutingModule
	]
} )
export class FeaturesModule { }
