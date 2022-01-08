import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public list$: Observable<any> = of([]);

  public constructor(private apiService: ApiService) {
  }

  public ngOnInit(): void {

    this.list$ = this.apiService.get<any>('characters');

  }

}
