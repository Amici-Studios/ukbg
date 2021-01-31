import { OfficesComponent } from './offices/offices.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { OfficeDetailComponent } from '../app/offices/office-detail/office-detail.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offices', component: OfficesComponent },
  { path: 'office-detail', component: OfficeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
