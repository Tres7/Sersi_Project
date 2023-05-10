import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HomeComponent } from './home/home.component';
import { FarineComponent } from './farine/farine.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'app', component: AppComponent },
  { path: 'formation', component: FormationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'farine', component: FarineComponent }
  /*{ path: 'accueil', component: AccueilComponent }*/
]

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
