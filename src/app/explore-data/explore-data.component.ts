import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactType } from '../models/contact-type';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-explore-data',
  templateUrl: './explore-data.component.html',
  styleUrls: ['./explore-data.component.scss']
})
export class ExploreDataComponent implements OnInit {
  contactTypes: ContactType[];
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() { }

  reset() {
    this.contactTypes = [];
    this.contacts = [];
  }

  getContacts() {  
    this.contactService.getContacts().subscribe(
      contacts => this.contacts = contacts
    );
  }

  getContactTypes() {
    this.contactService.getContactTypes().subscribe(
      types => this.contactTypes = types
    );
  }

  addContact() {
    const contact: Contact = {
      id: 100,
      name: 'Test Testesen'
    };

    this.contactService.addContact(contact).subscribe(
      result => this.contacts.push(result)
    );
  }

  updateContact() {
    const contact: Contact = {
      id: 100,
      name: 'Test T. Estesen'
    };

    this.contactService.updateContact(contact).subscribe(
      result => this.getContacts()
    );
  }
}
