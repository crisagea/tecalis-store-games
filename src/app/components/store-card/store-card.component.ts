import { Component, Input, EventEmitter, Output } from "@angular/core";
import { StoreListDetailApiResponse } from "src/app/core/models/store";

@Component({
  selector: "app-store-card",
  templateUrl: "store-card.component.html"
})
export class StoreCardComponent {
  @Input() store: StoreListDetailApiResponse;
  @Output() navStoreDetail: EventEmitter<any> = new EventEmitter();
  @Output() navStoreWeb: EventEmitter<any> = new EventEmitter();


  constructor(
  ) { }

  navToStoreDetail(storeId) {
    this.navStoreDetail.emit(storeId);
  }

  navToStoreWeb(url, event) {
    event.stopPropagation();
    this.navStoreWeb.emit(url);
  }
}
