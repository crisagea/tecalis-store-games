import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { StoreListPageComponent } from "./pages/store-list/store-list.component";
import { StoreDetailPageComponent } from "./pages/store-detail/store-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "stores", pathMatch: "full" },
  { path: "stores", component: StoreListPageComponent },
  { path: "store-detail/:id", component: StoreDetailPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
