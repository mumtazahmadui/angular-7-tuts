import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: Book = new Book();
  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private location: Location) { }

  ngOnInit() {
    // alert(this.route.snapshot.params.id);
    // this.bookService.getBook(parseInt(this.route.snapshot.params.id)).subscribe(book => this.book = book);

    // alert(this.route.snapshot.paramMap.get('id'));
    // this.bookService.getBook(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(book => this.book = book);

    // this.route.paramMap.subscribe(params => {
    //   alert(params.get('id'));
    //   this.bookService.getBook(parseInt(params.get('id'))).subscribe(book => this.book = book);
    // });

    this.route.params.subscribe(params => {
      alert(params.id);
      this.bookService.getBook(parseInt(params.id)).subscribe(book => this.book = book);
    });
  }

  goBack():void {
    this.location.back();
  }

}
