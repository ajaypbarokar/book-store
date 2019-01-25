import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material';

const modules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule
];
const sharedResource = [];
@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: sharedResource
})
export class SharedModule {}
