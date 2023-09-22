import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { NavigationHelper } from "src/app/core/helpers/navigation-helper.services";
import { StoreApiResponse, StoreListDetailApiResponse } from "src/app/core/models/store";
import { StateService } from "src/app/core/services/state.service";
import { StoreService } from "src/app/core/services/store.service";

@Component({
  selector: "app-store-list",
  templateUrl: "store-list.component.html"
})
export class StoreListPageComponent implements OnInit, OnDestroy {
  public isCollapsed = true;
  public storeList: StoreListDetailApiResponse[];

  constructor(
    private storeServices: StoreService,
    private router: Router,
    private stateService: StateService,
    private navHelperServices: NavigationHelper
  ) {}

  ngOnInit() {
    this.storeServices.getStoreList().subscribe((response: StoreApiResponse) => {
      this.storeList = response.results;
    });

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }

  navToStoreDetail(storeId) {
    const storeSelected = this.storeList.find(store => { return store.id === storeId; });
    this.stateService.updateState({
      storeId,
      games: storeSelected.games
    })
    this.router.navigate(
      ['/store-detail', storeId]);
  }

  navToStoreWeb(url) {
    this.navHelperServices.openExternalUrl(url);
  }
}

