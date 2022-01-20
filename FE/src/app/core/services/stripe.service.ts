import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class StripeService {
  constructor(private http: HttpClient) {}

  generateLink(data: any) {
    return this.http.post(environment.baseUrl + "/connect/generateLink/", data);
  }

  createConnectedAccount() {
    return this.http.post(
      environment.baseUrl + "/connect/createConnectedAccount/",
      {}
    );
  }
  makePayment(data: any) {
    return this.http.post(
      environment.baseUrl + "/connect/createOneTimePayment/",
      data
    );
  }
  createCustomer(data: any) {
    return this.http.post(environment.baseUrl + "/connect/createUser/", data);
  }
}
