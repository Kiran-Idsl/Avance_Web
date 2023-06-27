import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterurlComponent } from './components/registerurl/registerurl.component';
import { UrlCheckGuard } from './guards/url-check.guard';

const routes: Routes = [
  { path: 'register', component: RegisterurlComponent ,canActivate : [UrlCheckGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
