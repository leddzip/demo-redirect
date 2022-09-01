import {Component, Inject} from '@angular/core';
import {MainService} from "./generated/redirect-api/services/main.service";
import {DOCUMENT} from "@angular/common";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-redirect';

  private window: any;

  constructor(private redirectApi: MainService,
              @Inject(DOCUMENT) private document: Document,
              @Inject('BASE_API_URL') private baseUrl: string) {
    this.window = this.document.defaultView;
  }

  public goodRedirect() {
    this.window.open(`${this.baseUrl}/${MainService.RedirectPath}`);
  }

  public badRedirect() {
    this.redirectApi.redirect$Response().subscribe(
      resp => this.window.open(resp.headers.get("location"))
    );
  }

}
