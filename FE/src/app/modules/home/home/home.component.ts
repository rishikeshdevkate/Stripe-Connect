import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { StripePaymentComponent } from "../../stripe-payment/stripe-payment/stripe-payment.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  title = "STRIPE DEMO";
  planName: any;

  constructor(private modalService: NgbModal, private router: Router) {}

  ngOnInit(): void {
    this.planName = localStorage.getItem("plan");
  }

  oneTimePayment(value: any) {
    let size = "md";
    if (value == "connect") size = "sm";
    const modalRef = this.modalService.open(StripePaymentComponent, {
      centered: true,
      keyboard: false,
      windowClass: "custom-class",
      size: size,
      backdrop: "static",
    });
    modalRef.componentInstance.type = "test mode";
    modalRef.componentInstance.fromPayment = value;
    modalRef.result.then(
      (result: any) => {},
      (reason: any) => {
        console.log(reason);
      }
    );
  }

  subscriptionPlans() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(["/plans/subscription-plans"])
    );
    window.open(url, "_blank");
  }
}
