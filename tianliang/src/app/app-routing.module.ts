import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FAQComponent } from './faq/faq.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product', component:ProductComponent},
  {path: 'faq', component:FAQComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
