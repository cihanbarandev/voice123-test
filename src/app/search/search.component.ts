import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  users: any[];
  searchIsDone = false;
  searchValue = '';

  // pagination
  collectionSize: number;
  pageSize = 5;
  page = 1;

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  handleInput($event) {
    this.searchValue = $event.target.value;
    this.search(this.searchValue);
  }

  handleButton($event: any, searchInput: HTMLInputElement) {
    $event.preventDefault();

    this.searchValue = searchInput.value;
    this.search(this.searchValue);
  }

  search(searchText: string) {
    this.searchService.searchUser(searchText).subscribe(results => {
      this.users = results.providers.map(user => {
        const pattern = /\n/;
        let summary = 'No summary provided.';

        if (user.summary) {
          const firstParStartsAt = user.summary.search(pattern);
          summary = user.summary.slice(0, firstParStartsAt);
        }

        return (user = { ...user, ...{ summary } });
      });

      this.collectionSize = this.users.length;
      this.searchIsDone = true;
    });
  }
}
