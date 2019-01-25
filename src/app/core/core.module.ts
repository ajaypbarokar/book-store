import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService, LoggerService, LocalStorageService } from './services';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  providers: [LocalStorageService, LoggerService, DataService],
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
