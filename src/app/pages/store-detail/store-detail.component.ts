import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { NavigationHelper } from "src/app/core/helpers/navigation-helper.services";
import { GameDetailApiResponse, StoreApiResponse, StoreDetailApiResponse, StoreGameDetailApiResponse } from "src/app/core/models/store";
import { StateService } from "src/app/core/services/state.service";
import { StoreService } from "src/app/core/services/store.service";

@Component({
  selector: "app-store-list",
  templateUrl: "store-detail.component.html"
})
export class StoreDetailPageComponent implements OnInit, OnDestroy {
  public isCollapsed = true;
  public storeDetail: StoreDetailApiResponse;
  public gamesList: StoreGameDetailApiResponse[];
  public gameSelected: Partial<StoreGameDetailApiResponse>;
  public gameModal

  private subs: Subscription;
  private id: string;

  constructor(
    private storeServices: StoreService,
    private route: ActivatedRoute,
    private stateService: StateService,
    private navHelperServices: NavigationHelper
  ) {
    this.subs = new Subscription();
    if(!this.gamesList) this.loadGameList();
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");

    this.id = this.route.snapshot.paramMap.get('id')

    this.storeServices.getStoreDetail(this.id).subscribe((response: StoreDetailApiResponse) => {
      this.storeDetail = response;
    });

    this.subs.add(
      this.stateService.getState().subscribe(state => {
        this.gamesList = state.games
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
  }

  public openGameModal(gameId, gameModal) {
    gameModal.show()

    this.storeServices.getGameDetail(gameId).subscribe((response: Partial<GameDetailApiResponse>) => {
      this.gameSelected = response;
    })
  }

  public navToStoreWeb(url) {
    this.navHelperServices.openExternalUrl(url);
  }

  private loadGameList() {
    this.storeServices.getStoreList().subscribe((response: StoreApiResponse) => {
      const storeSelected = response.results.find(store => { return store.id === parseInt(this.id); });

      this.gamesList = storeSelected.games;
    });
  }
}

