import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShopComponent } from './shop/shop.component';
import { SharedComponent } from './shared/shared.component';
import { PagerComponent } from './shared/components/pager/pager.component';
import { PagingHeaderComponent } from './shared/components/paging-header/paging-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShopComponent,
    SharedComponent,
    PagerComponent,
    PagingHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
