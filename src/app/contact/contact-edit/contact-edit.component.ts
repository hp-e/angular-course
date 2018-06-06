import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Contact } from "../../models/contact";
import { ContactService } from "../../contact.service";
import { Observable, Subscription } from "rxjs";
import { ContactType } from "../../models/contact-type";
import { ActivatedRoute, Router } from "@angular/router";
// import { CustomValidators } from "../../shared/custom-validators";

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styles: []
})
export class ContactEditComponent implements OnInit, OnDestroy {

  contactId: number;

  contactTypes$: Observable<ContactType[]>;
  editForm: FormGroup; 
  routeSubscription: Subscription;

  totalCharsAllowed = 500;
  charCount = 0;

  get lastnameControl() { return this.editForm.get('lastName'); }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();

    this.routeSubscription = this.route.params.subscribe(params => {

      const contactId = +params['contactId'];
            
      if (contactId > 0) {
        this.getUserData(contactId);        
      } 

    });

    this.contactTypes$ = this.contactService.getContactTypes();
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
  
  initializeForm() {
    this.editForm = this.formBuilder.group({
      id: [-1, [Validators.required]],
      firstName: [undefined, [Validators.required]],
      lastName: [undefined, [Validators.required]],
      phone: [undefined],
      company: [undefined],
      contactType: [1],
      isFav: [false],
      email: [undefined, [Validators.email]],
      remark: [undefined, [Validators.required, Validators.maxLength(this.totalCharsAllowed)]]      
    });

    this.editForm.get('remark').valueChanges.subscribe(
      value => {        
        this.charCount = value === null || value === undefined ? 0 : value.length;
      }
        );
  }
  
  resetForm() {
    if (this.editForm) {
      this.editForm.reset();
      this.editForm.patchValue({
        id: -1
      });
    }

    this.charCount = 0;
  }
  onDataRetrieved(contact: Contact) {
    this.resetForm();

    this.editForm.patchValue({
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      phone: contact.phone,
      company: contact.company,
      contactType: contact.contactType,
      isFav: contact.isFav,
      email: contact.email,
      remark: contact.remark      
    });

    this.charCount = contact.remark !== undefined ? contact.remark.length :  0;
  }

  // pnr er generert her: http://prag.matisk.com/ssn/

  getUserData(id: number) {
    this.contactService.getContact(id).subscribe(
      contact => this.onDataRetrieved(contact)
    );    
  }

  save() {
    const contact: Contact = Object.assign({}, this.editForm.value);

    if (contact.id > 0) {
      this.update(contact);
    } else {
      this.create(contact);
    }
  }

  update(contact: Contact) {
    this.contactService.updateContact(contact).subscribe(
      result => this.onDataRetrieved(contact)
    );
  }

  create(contact: Contact) {
    this.contactService.addContact(contact).subscribe(
      result => this.onDataRetrieved(contact)
    );
  }

}
