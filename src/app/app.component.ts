import {Component} from '@angular/core';
import {ApiService} from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public constructor(private apiService: ApiService) {

    this.apiService.get<any>('characters').subscribe(response => {

      console.log(response);

    })

  }

}
