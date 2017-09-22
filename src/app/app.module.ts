import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppRoutingModule }     from './app-routing.module';
import { PurviewModule } from './admin.purview.components/purview.module';

import { AppComponent } from './app.component';
import { NzAdminLayoutComponent} from './nz.admin.layout/nz.admin.layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NzAdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    PurviewModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
