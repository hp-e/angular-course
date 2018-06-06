import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactIndexComponent } from './contact-index/contact-index.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

const routes: Routes = [
  {path: '', component: ContactIndexComponent},
  {path: ':contactId', component: ContactEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
