import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";

import { StoreDetailPageComponent } from "./store-detail/store-detail.component";
import { StoreListPageComponent } from "./store-list/store-list.component";
import { StoreCardComponent } from "../components/store-card/store-card.component";
import { GameDetailComponent } from "../components/game-detail/game-detail.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ProgressbarModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
  ],
  declarations: [
    StoreDetailPageComponent,
    StoreListPageComponent,
    StoreCardComponent,
    GameDetailComponent
  ],
  exports: [
    StoreDetailPageComponent,
    StoreListPageComponent
  ],
  providers: []
})
export class PagesModule {}
