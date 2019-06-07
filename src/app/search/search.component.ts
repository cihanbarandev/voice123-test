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
  audio = 'https://v1-media.s3.amazonaws.com/';

  // pagination
  collectionSize: number;
  pageSize = 5;
  page = 1;

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  handleInput($event) {
    const searchValue = $event.target.value;
    this.search(searchValue);
  }

  handleButton($event: any, searchInput: HTMLInputElement) {
    $event.preventDefault();

    const searchValue = searchInput.value;
    this.search(searchValue);
  }

  search(searchText: string) {
    this.searchService.searchUser(searchText).subscribe(results => {
      this.users = results.providers;
      this.collectionSize = this.users.length;
      this.searchIsDone = true;
    });
  }
}
