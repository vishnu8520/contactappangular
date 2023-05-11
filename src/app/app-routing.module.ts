import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcontactComponent } from './allcontact/allcontact.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //allcontacts :http://localhost:4200/
  {
    path:'',component:AllcontactComponent
  },
  //addcontact
  {
    path:'addcontact',component:AddcontactComponent
  },
  //viewcontact -- with that particular contact id
  {
    path:'viewcontact/:id',component:ViewcontactComponent
  },
  //editcontact -- with that particular conatct id to be edited
  {
    path:'editcontact/:id',component:EditcontactComponent
  },
  // page not found
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
