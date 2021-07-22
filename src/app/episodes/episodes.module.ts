import { NgModule } from '@angular/core';

import { EpisodesComponent } from './episodes.component';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';

@NgModule({
  declarations: [EpisodesComponent, EpisodesListComponent],
  exports: [EpisodesComponent]
})
export class EpisodesModule {}
