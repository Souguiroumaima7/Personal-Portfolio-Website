import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { BacktotopComponent } from './Components/backtotop/backtotop.component';
import { CopyrightComponent } from './Components/copyright/copyright.component';
import { ExpertiseComponent } from './Components/expertise/expertise.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { MapComponent } from './Components/map/map.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ServiceComponent } from './Components/service/service.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { TeamComponent } from './Components/team/team.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { VideoModalComponent } from './Components/video-modal/video-modal.component';

const routes: Routes = [
{path : "" , component:HomeComponent},
{path : "about" , component:AboutComponent},
{path : "Contact" , component:AboutComponent},
{path : "Backtotop" , component:BacktotopComponent},
{path :"copyright", component:CopyrightComponent},
{path :"expertise", component:ExpertiseComponent},
{path :"header", component:HeaderComponent},
{path :"map", component:MapComponent},
{path :"navbar", component:NavbarComponent},
{path :"projects", component:ProjectsComponent},
{path :"service", component:ServiceComponent},
{path :"spinner", component:SpinnerComponent},
{path :"team", component:TeamComponent},
{path :"testimonial", component:TestimonialComponent},
{path :"videomodal", component:VideoModalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
