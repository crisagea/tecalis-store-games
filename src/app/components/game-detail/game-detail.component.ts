import { Component, Input, OnChanges } from "@angular/core";
import { GameDetailApiResponse } from "src/app/core/models/store";

@Component({
  selector: "app-game-detail",
  templateUrl: "game-detail.component.html",
  styleUrls: ['game-detail.component.scss']
})
export class GameDetailComponent implements OnChanges {
  @Input() gameSelected: GameDetailApiResponse;
  @Input() gameModal;

  public imagesList: String[] = [];

  constructor() { }

  ngOnChanges() {
    this.imagesList = [this.gameSelected?.background_image, this.gameSelected?.background_image_additional];
  }

  public calculatePercentage() {
    return this.gameSelected?.rating * 100 / this.gameSelected?.rating_top;
  }
}
