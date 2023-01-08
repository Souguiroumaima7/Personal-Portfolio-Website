import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { HeaderComponent } from './Components/header/header.component';
import { VideoModalComponent } from './Components/video-modal/video-modal.component';
import { AboutComponent } from './Components/about/about.component';
import { ExpertiseComponent } from './Components/expertise/expertise.component';
import { ServiceComponent } from './Components/service/service.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { TeamComponent } from './Components/team/team.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { ContactComponent } from './Components/contact/contact.component';
import { MapComponent } from './Components/map/map.component';
import { CopyrightComponent } from './Components/copyright/copyright.component';
import { BacktotopComponent } from './Components/backtotop/backtotop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SpinnerComponent,
    HeaderComponent,
    VideoModalComponent,
    AboutComponent,
    ExpertiseComponent,
    ServiceComponent,
    ProjectsComponent,
    TeamComponent,
    TestimonialComponent,
    ContactComponent,
    MapComponent,
    CopyrightComponent,
    BacktotopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
