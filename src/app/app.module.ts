import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ProcessComponent } from './process/process.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { LocationComponent } from './location/location.component';
import { ListProcessComponent } from './process/list-process/list-process.component';
import { DetailProcessComponent } from './process/detail-process/detail-process.component';
import { ProcessService } from './process.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import {MatSortModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProcessComponent,
    StakeholderComponent,
    LocationComponent,
    ListProcessComponent,
    DetailProcessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [ProcessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
