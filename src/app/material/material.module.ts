import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatDatepickerModule
} from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTableModule,
  MatNativeDateModule,
  MatSortModule,
  MatCheckboxModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {}
