import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: ContentComponent },
  { path: '', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
