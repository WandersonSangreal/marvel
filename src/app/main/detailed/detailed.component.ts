import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Character} from "../../models/character";
import {Comic} from "../../models/comic";
import {Pagination} from "../../models/pagination";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit {

  public details$: Observable<{ results: Array<Character>; pagination: Pagination } | null> = of(null);
  public comics$: Observable<{ results: Array<Comic>; pagination: Pagination } | null> = of(null);

  public constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  public ngOnInit(): void {

    this.details$ = this.apiService.get<Array<Character>>('characters/' + this.route.snapshot.params['id']).pipe(map(response => {
      if (response.results.length > 0 && response.results[0]?.comics?.collectionURI) {
        this.getComicThumb(response.results[0]?.comics?.collectionURI);
      }
      return response;
    }));

  }

  public getComicThumb(url: string): void {

    const endpoint = url.replace('http', 'https').replace(environment.api, '');

    this.comics$ = this.apiService.get<Array<Comic>>(endpoint);

  }

}
