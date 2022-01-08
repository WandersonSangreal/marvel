import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class CredentialInterceptor implements HttpInterceptor {

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        'Accept': 'application/json',
      },
      setParams: {
        ts: environment.crendential.ts,
        apikey: environment.crendential.public,
        hash: environment.crendential.hash,
      }
    });

    return next.handle(request);
  }

}
