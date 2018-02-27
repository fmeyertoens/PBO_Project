import { ListStakeholderComponent } from './stakeholder/list-stakeholder/list-stakeholder.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProcessComponent } from './process/list-process/list-process.component';
import { DetailProcessComponent } from './process/detail-process/detail-process.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: 'stakeholder', component: ListStakeholderComponent },
  { path: 'location', component: LocationComponent },
  { path: 'process', component: ListProcessComponent },
  { path: '', redirectTo: '/process', pathMatch: 'full' },
  { path: 'detail/:id', component: DetailProcessComponent },
  { path: '**', redirectTo: '/process' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }


