import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

// Nuestras rutas, importar Routes
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full',},
  { path: 'works', component: WorksComponent,},
  { path: 'about', component: AboutComponent,},
  { path: 'contact', component: ContactComponent,},
  { path: '**', redirectTo: '',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
