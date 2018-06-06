import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ExploreDataComponent } from './explore-data/explore-data.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'explore', component: ExploreDataComponent},
  {path: 'contacts',  loadChildren: './contact/contact.module#ContactModule'},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
