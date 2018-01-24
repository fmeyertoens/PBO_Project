import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ProcessComponent } from './process/process.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { LocationComponent } from './location/location.component';
import { ListProcessComponent } from './process/list-process/list-process.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProcessComponent,
    StakeholderComponent,
    LocationComponent,
    ListProcessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }