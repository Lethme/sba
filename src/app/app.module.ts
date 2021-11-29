import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StyleService } from './service/style/style.service';
import { ScriptService } from './service/script/script.service';
import { RoutingManager } from './app-routing.manager';
import { NavbarComponent } from './navbar/navbar.component';
import { NavlinkComponent } from './navlink/navlink.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CompanyComponent } from './pages/company/company.component';
import { ServicesComponent } from './pages/services/services.component';
import { NewsComponent } from './pages/news/news.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavlinkComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    CompanyComponent,
    ServicesComponent,
    NewsComponent,
    ClientsComponent,
    TestimonialsComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StyleService,
    ScriptService,
    RoutingManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
