import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BidsNBuysBoardComponent } from "./export-result/bids-n-buys-board/bids-n-buys-board.component";
import { DesktopNavForUserComponent } from "./export-result/desktop-nav-for-user/desktop-nav-for-user.component";
import { FooterDesktopComponent } from "./export-result/footer-desktop/footer-desktop.component";
import { Frame571Component } from "./export-result/frame-571/frame-571.component";
import { ToggleAllComponent } from "./export-result/toggle-all/toggle-all.component";
import { NavListComponent } from "./export-result/nav-list/nav-list.component";
import { ToggleButtonComponent } from "./export-result/toggle-button/toggle-button.component";

@NgModule({
  declarations: [
    AppComponent,
    BidsNBuysBoardComponent,
    DesktopNavForUserComponent,
    FooterDesktopComponent,
    Frame571Component,
    ToggleAllComponent,
    NavListComponent,
    ToggleButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
