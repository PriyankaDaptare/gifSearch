import { Component, OnInit, ViewEncapsulation, Directive, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  giphies = [];

  constructor(
    private fb: FormBuilder, private httpClient: HttpClient
  ) {  }

   ngOnInit() { }

  performSearch(searchTerm: HTMLInputElement): void {
    const apiLink = this.link + searchTerm.value;

    this.httpClient.get(apiLink).subscribe((res: any) => {
      console.log(res);
      // console.log(res.json());
      this.giphies = res.data;
      console.log(this.giphies);
    });
  }
}
