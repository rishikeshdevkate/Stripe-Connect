import { Component } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Stripe Connect Demo";
  cartSubscription: Subscription;

  constructor() {}
  ngOnInit() {}
  ngOnDestory() {}
}
