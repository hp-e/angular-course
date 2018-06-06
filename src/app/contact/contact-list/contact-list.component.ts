import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: []
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[];
  @Output() delete: EventEmitter<Contact> = new EventEmitter();
  @Output() isFav: EventEmitter<Contact> = new EventEmitter();

  constructor() { }

  ngOnInit() { }
  
  onContactDelete(contact: Contact) {
    this.delete.emit(contact);
  }

  onFav(contact: Contact) {
    this.isFav.emit(contact);
  }
}
