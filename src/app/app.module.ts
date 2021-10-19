import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderModule } from './my-header/my-header.module';
import { MyHeroImageModule } from './my-hero-image/my-hero-image.module';
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    MyHeaderModule,
    // MyHeroImageModule, //Allen maar een module kan gerenderd worden ?
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
