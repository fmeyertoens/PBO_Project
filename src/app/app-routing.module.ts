import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { ListProcessComponent } from './process/list-process/list-process.component';
import { DetailProcessComponent } from './process/detail-process/detail-process.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: 'stakeholder', component: StakeholderComponent },
  { path: 'location', component: LocationComponent },
  { path: 'process', component: ListProcessComponent },
  { path: '', redirectTo: '/process', pathMatch: 'full' },
  { path: 'detail/:id', component: DetailProcessComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }


