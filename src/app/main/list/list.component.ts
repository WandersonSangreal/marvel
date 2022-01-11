import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {map, Observable, of} from "rxjs";
import {Character} from "../../models/character";
import {Pagination} from "../../models/pagination";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public page = 1;
  public search: string = '';
  public list$: Observable<{ results: Array<Character>; pagination: Pagination } | null> = of(null);

  public constructor(private apiService: ApiService) {

    this.search = (sessionStorage.getItem('search') || '');
    this.page = parseInt((sessionStorage.getItem('page') || '1'), 10);

  }

  public ngOnInit(): void {

    this.list$ = this.apiService.get<Array<Character>>('characters', (!!this.page ? this.page : undefined), (!!this.search ? this.search : undefined));

  }

  public changePage(ev: number, items: number): void {

    this.page = (((ev * items) + 1) - items);

    this.list$ = this.apiService.get<Array<Character>>('characters', this.page);

  }

  public searchCharacters(search: string): void {

    this.page = 1;

    this.list$ = this.apiService.get<Array<Character>>('characters', (!!this.page ? this.page : undefined), (!!search ? search : undefined));

  }

}
