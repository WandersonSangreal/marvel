import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of, share} from "rxjs";
import {environment} from "../../environments/environment";
import {Pagination} from '../models/pagination'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public constructor(private httpClient: HttpClient) {

  }

  public get<T>(end: string, page?: number, search?: string): Observable<{ results: T; pagination: Pagination }> {

    if (page) {
      sessionStorage.setItem('page', String(page));
    }

    let url = new URL(environment.api + end);

    if (page) {
      url.searchParams.append('offset', String(page));
    }

    if (search) {
      url.searchParams.append('nameStartsWith', search);
    }

    return this.httpClient.get<{ data: { count: number; limit: number; offset: number; total: number; results: T } }>(url.toString())
      .pipe(
        share(),
        map(response => {
          const pagination = {
            total: response.data.total,
            page: (((response.data.offset !== 0 ? (response.data.offset - 1) : response.data.offset) / response.data.limit) + 1),
            items: response.data.limit,
          };
          return {results: response.data.results, pagination: pagination};
        }));

  }

}
