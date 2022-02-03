import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from 'src/app/material.module';

import { LoaderComponent } from './pages/loader/loader.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { WMImagePathDirective } from './custom-directive/wm-assets-img.directive';
import { CustomDatepickerComponent } from './pages/custom-datepicker/custom-datepicker.component';

@NgModule({
  declarations: [ LoaderComponent, UnderConstructionComponent, WMImagePathDirective, CustomDatepickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    OverlayModule,
    MaterialModule,
  ],
  exports: [ LoaderComponent, UnderConstructionComponent, WMImagePathDirective, CustomDatepickerComponent]
})
export class SharedModule { }
