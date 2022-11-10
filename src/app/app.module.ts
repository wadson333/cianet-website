import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localefr from '@angular/common/locales/fr';

import { BreadcrumbModule } from "xng-breadcrumb";
import { BreadcrumbService } from 'xng-breadcrumb';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PNotFoundComponent } from './pages/p-not-found/p-not-found.component';
import { TeamComponent } from './pages/team/team.component';
import { AboutComponent } from './pages/about/about.component';
import { BreadcrumpComponent } from './composant/breadcrump/breadcrump.component';
import { HeaderComponent } from './composant/header/header.component';
import { NavBarComponent } from './composant/nav-bar/nav-bar.component';
import { FooterComponent } from './composant/footer/footer.component';
import { ContactFormComponent } from './composant/contact-form/contact-form.component';
import { UserCardComponent } from './composant/user-card/user-card.component';
import { MapComponent } from './composant/map/map.component';
import { HeaderPictureComponent } from './composant/header-picture/header-picture.component';
import { SocialMenuComponent } from './composant/social-menu/social-menu.component';
import { AccordionComponent } from './composant/accordion/accordion.component';
import { AccordionLinkComponent } from './composant/accordion/accordion-link/accordion-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PNotFoundComponent,
    TeamComponent,
    AboutComponent,
    BreadcrumpComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    ContactFormComponent,
    UserCardComponent,
    MapComponent,
    HeaderPictureComponent,
    SocialMenuComponent,
    AccordionComponent,
    AccordionLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    BreadcrumbModule,
  ],
  providers: [
    BreadcrumbService,
    {
      provide: LOCALE_ID,
      useValue: 'fr'
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(localefr)
  }
}
