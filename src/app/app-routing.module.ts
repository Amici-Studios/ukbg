import { GrievingComponent } from './pages/grief/grieving/grieving.component';
import { OfficesComponent } from './offices/offices.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { OfficeDetailComponent } from '../app/offices/office-detail/office-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './shared/blogs/blog-detail/blog-detail.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offices', component: OfficesComponent },
  { path: 'office-detail', component: OfficeDetailComponent },
  { path: 'grieving', component: GrievingComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
