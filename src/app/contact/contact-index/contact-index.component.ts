import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact';
import { Observable } from 'rxjs';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styles: []
})
export class ContactIndexComponent implements OnInit {

  contacts: Contact[]; 
  contacts$: Observable<Contact[]>;   

  constructor(private contactService: ContactService) { }

  ngOnInit() { 

    // alt 1: cannot use async pipe
    // this.getContacts();

    // alt2: can use async pipe in html
    this.contacts$ = this.contactService.getContacts();
  }

  getContacts() {  
    this.contactService.getContacts().subscribe(
      contacts => this.contacts = contacts
    );
  }

  onContactDelete(contact: Contact) {
    console.log("Delete contact", contact);
  }

  onFavUpdate(contact: Contact) {
    this.contactService.updateContact(contact).subscribe(
      result => console.log("updated")
    );
  }
}
