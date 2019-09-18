import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/service/FilterService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchParam: String = ""

  constructor(private FilterService: FilterService) { }

  ngOnInit() {
  }
  onSearch() {

    console.log(this.searchParam)
    this.FilterService.emitChange(this.searchParam)
  }

  onClear() {
    //clearing data 
    this.searchParam = ""
    this.FilterService.emitClearChange('')
  }

}
