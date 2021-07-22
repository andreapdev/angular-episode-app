import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EpisodesModule } from './episodes/episodes.module';

@NgModule({
  imports: [BrowserModule, FormsModule, EpisodesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
