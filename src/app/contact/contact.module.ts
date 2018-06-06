import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactIndexComponent } from './contact-index/contact-index.component';
import { ContactCardComponent } from './contact-card/contact-card.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ContactListComponent, ContactEditComponent, ContactIndexComponent, ContactCardComponent]
})
export class ContactModule { }
