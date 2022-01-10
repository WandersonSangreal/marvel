import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit {

  public details$: Observable<any> = of(null);

  public constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  public ngOnInit(): void {

    this.details$ = this.apiService.get<any>('characters/' + this.route.snapshot.params['id']);

  }

  public getComicThumb(url: string): Observable<any> {

    return this.apiService.get<any>(url);

  }

}
