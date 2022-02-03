import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
 import {MatSelectModule} from '@angular/material/select';
 import {MatSliderModule} from '@angular/material/slider';
 import {MatSnackBarModule} from '@angular/material/snack-bar';

 @NgModule({
  imports: [
 ],
  exports: [
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatSnackBarModule
  ]
})

export class MaterialModule {}
