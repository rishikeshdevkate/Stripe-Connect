import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./core/shared.module";

import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AsyncPipe } from "../../node_modules/@angular/common";
import { StripePaymentModule } from "./modules/stripe-payment/stripe-payment.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StripePaymentModule,
  ],
  providers: [AsyncPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
