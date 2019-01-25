import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material';
import { DataService } from './data.service';
import { HeaderComponent } from './header';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  providers: [DataService],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
