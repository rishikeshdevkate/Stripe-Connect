import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";
import { SharedModule } from "../../core/shared.module";
import { DatepickerModule, BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { HomeComponent } from "./home/home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      name: "home",
    },
    children: [
      {
        path: "stripe-demo",
        component: HomeComponent,
        data: {
          name: "home",
        },
      },
      {
        path: "",
        redirectTo: "stripe-demo",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    RouterModule.forChild(routes),
    NgbModule,
    NgSelectModule,
  ],

  exports: [FormsModule, ReactiveFormsModule],
})
export class HomeModule {}
