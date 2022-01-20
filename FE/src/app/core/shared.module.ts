import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { AngularWebStorageModule } from "angular-web-storage";
import { ModalModule } from "ngx-bootstrap/modal";
import { RouterModule } from "@angular/router";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ShareButtonsModule } from "ngx-sharebuttons/buttons";
import { ShareIconsModule } from "ngx-sharebuttons/icons";
import { SharerMethod } from "ngx-sharebuttons";

import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularWebStorageModule,
    ShareButtonsModule.withConfig({
      debug: true,
      sharerMethod: SharerMethod.Window,
    }),
    ShareIconsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
    }),
    ModalModule.forRoot(),
    RouterModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports: [InfiniteScrollModule],
  providers: [],
})
export class SharedModule {}
