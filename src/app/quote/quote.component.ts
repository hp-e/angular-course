import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styles: []
})
export class QuoteComponent implements OnInit {

  @Input() quote: string;
  @Input() author: string;
  
  constructor() { }

  ngOnInit() {
  }

}
