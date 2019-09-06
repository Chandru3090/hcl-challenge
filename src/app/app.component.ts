import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { SearchResults } from './models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchResults: SearchResults[];
  isApiError = false;
  isSubmitted = false;
  constructor(private appService: AppService) { }

  search(value: any) {
    this.appService.getSearchResults(value).subscribe(data => {
      if (data.status === 'OK') {
        this.searchResults = data.results;
        this.isApiError = false;
      } else {
        this.searchResults = [];
        this.isApiError = true;
      }
      this.isSubmitted = true;
    });
  }
}
