import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  notFoundSrc: string = "https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif";
  notFoundAlt: string = "Not Found Image";

  constructor() { }

  ngOnInit(): void {
  }

}
