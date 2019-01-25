import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatTabsModule,
  MatSortModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatSelectModule
} from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatSelectModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatTabsModule,
  MatSortModule,
  MatCheckboxModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {}
