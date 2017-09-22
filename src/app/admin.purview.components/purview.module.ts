import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PurviewComponent } from './purview.component';

import { PurviewRouttingModule } from './purview-routting.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PurviewRouttingModule
  ],
  declarations: [
    PurviewComponent,
  ],
})
export class PurviewModule {}
