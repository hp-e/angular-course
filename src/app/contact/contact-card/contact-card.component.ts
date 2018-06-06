import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact';


@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styles: []
})
export class ContactCardComponent implements OnInit {

  @Input() contact: Contact; 

  @Output() delete: EventEmitter<Contact> = new EventEmitter();
  @Output() isFav: EventEmitter<Contact> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.delete.emit(this.contact);
  }

  toggleFav() {
    this.contact.isFav = !this.contact.isFav;
    this.isFav.emit(this.contact);
  }
}
