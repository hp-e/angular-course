import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Contact } from './models/contact';
import { ContactType } from './models/contact-type';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsUrl = 'api/contacts';
  
  private contactTypes: ContactType[] = [
    { id: 0, name: 'None' },
    { id: 1, name: 'Family' },
    { id: 2, name: 'Friend' },
    { id: 3, name: 'Collegue' },
    { id: 4, name: 'Facebook' }
  ];

  constructor(private http: HttpClient) {}

  getContactTypes(): Observable<ContactType[]> {
    return of(this.contactTypes)
      .pipe(
        tap(contacts => this.log(`fetched contact types`)),
        catchError(this.handleError('getContactTypes', []))
    );
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl)
      .pipe(
        tap(contacts => this.log(`fetched contacts`)),
        catchError(this.handleError('getContacts', []))
      );
  }
 
  /** GET hero by id. Return `undefined` when id not found */
  getContactNo404<Data>(id: number): Observable<Contact> {
    const url = `${this.contactsUrl}/?id=${id}`;
    return this.http.get<Contact[]>(url)
      .pipe(
        map(contacts => contacts[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} contact id=${id}`);
        }),
        catchError(this.handleError<Contact>(`getContact id=${id}`))
      );
  }
 
  /** GET contact by id. Will 404 if id not found */
  getContact(id: number): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contact>(url).pipe(
      tap(_ => this.log(`fetched contact id=${id}`)),
      catchError(this.handleError<Contact>(`getContact id=${id}`))
    );
  }
 
  /* GET contacts whose name contains search term */
  searchContacts(term: string): Observable<Contact[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Contact[]>(`${this.contactsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found contacts matching "${term}"`)),
      catchError(this.handleError<Contact[]>('searchContacts', []))
    );
  }
 
  //////// Save methods //////////
 
  /** POST: add a new hero to the server */
  addContact (contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((contact: Contact) => this.log(`added contact w/ id=${contact.id}`)),
      catchError(this.handleError<Contact>('addContact'))
    );
  }
 
  /** DELETE: delete the hero from the server */
  deleteContact (contact: Contact | number): Observable<Contact> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.contactsUrl}/${id}`;
 
    return this.http.delete<Contact>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted contact id=${id}`)),
      catchError(this.handleError<Contact>('deleteContact'))
    );
  }
 
  /** PUT: update the hero on the server */
  updateContact (contact: Contact): Observable<any> {
    return this.http.put(this.contactsUrl, contact, httpOptions).pipe(
      tap(_ => this.log(`updated contact id=${contact.id}`)),
      catchError(this.handleError<any>('updateContact'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('ContactService: ' + message);
  }
}
