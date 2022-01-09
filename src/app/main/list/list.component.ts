import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {map, Observable, of} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public page = 1;
  public pagination: any = null;
  public list$: Observable<any> = of([]);

  public constructor(private apiService: ApiService) {
  }

  public ngOnInit(): void {

    this.list$ = this.apiService.get<any>('characters');

  }

  public changePage(ev: number, items: number): void {

    this.list$ = this.apiService.get<any>('characters', (((ev * items) + 1) - items));

  }

}
