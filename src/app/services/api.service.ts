import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public constructor(private httpClient: HttpClient) {
  }

  public get<T>(end: string): Observable<T> {

    return this.httpClient.get<{ data: { results: T } }>(environment.api + end).pipe(map(response => response.data.results));

  }

}
