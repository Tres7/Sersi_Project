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
import { BiscuitComponent } from './biscuit/biscuit.component';
import { ChampignonSecheComponent } from './champignon-seche/champignon-seche.component';
import { ChampignonFraisComponent } from './champignon-frais/champignon-frais.component';
import { ChampignonPoudreComponent } from './champignon-poudre/champignon-poudre.component';
import { SemenceComponent } from './semence/semence.component';
import { SachetComponent } from './sachet/sachet.component';
import { EmComponent } from './em/em.component';
import { LoginComponent } from './login/login.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AuthentificationGuard } from './authentification.guard';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'app', component: AppComponent },
  { path: 'formation', component: FormationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'farine', component: FarineComponent },
  { path: 'biscuit', component: BiscuitComponent },
  { path: 'champignon-seche', component: ChampignonSecheComponent },
  { path: 'champignon-frais', component: ChampignonFraisComponent },
  { path: 'champignon-poudre', component: ChampignonPoudreComponent },
  { path: 'semence', component: SemenceComponent },
  { path: 'sachet', component: SachetComponent },
  { path: 'em', component: EmComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'admin', component: AdministrateurComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
