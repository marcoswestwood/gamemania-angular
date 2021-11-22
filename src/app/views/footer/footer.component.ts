import { Component, OnInit } from '@angular/core';
import { Newsletter } from 'src/app/models/newsletter';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newsLetterModel = new Newsletter("")

  onSubmit() {
    console.log(this.newsLetterModel)
  }

}
