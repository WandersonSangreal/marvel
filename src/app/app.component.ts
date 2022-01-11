import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public constructor() {

  }

  public ngOnInit(): void {

    document.addEventListener("click", this.checkPlay, false);

  }

  public checkPlay() {

    const video = document.getElementById('particles-clip') as HTMLVideoElement;

    if (video.paused) {

      video.play().then();

    }

  }

}
