import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './authguard.service';


const routes: Routes = [
  {path:'',pathMatch: 'full',component:LoginComponent},
  { path: 'main/:id', component: MainContentComponent,canActivate:[AuthguardService] },
  {path:'login',component:LoginComponent},
  //{path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
