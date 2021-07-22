import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesComponent } from './episodes.component';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EpisodesComponent, EpisodesListComponent],
  exports: [EpisodesComponent]
})
export class EpisodesModule {}
