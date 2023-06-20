import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormationComponent } from './formation/formation.component';
import { FarineComponent } from './farine/farine.component';
import { BiscuitComponent } from './biscuit/biscuit.component';
import { ChampignonSecheComponent } from './champignon-seche/champignon-seche.component';
import { ChampignonFraisComponent } from './champignon-frais/champignon-frais.component';
import { ChampignonPoudreComponent } from './champignon-poudre/champignon-poudre.component';
import { SemenceComponent } from './semence/semence.component';
import { SachetComponent } from './sachet/sachet.component';
import { EmComponent } from './em/em.component';
import { AccueilFormationComponent } from './accueil-formation/accueil-formation.component';
import { AccueilImmoComponent } from './accueil-immo/accueil-immo.component';
import { AccueilAutoComponent } from './accueil-auto/accueil-auto.component';
import { LoginComponent } from './login/login.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AccueilComponent,
    FormationComponent,
    FarineComponent,
    BiscuitComponent,
    ChampignonSecheComponent,
    ChampignonFraisComponent,
    ChampignonPoudreComponent,
    SemenceComponent,
    SachetComponent,
    EmComponent,
    AccueilFormationComponent,
    AccueilImmoComponent,
    AccueilAutoComponent,
    LoginComponent,
    AdministrateurComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


