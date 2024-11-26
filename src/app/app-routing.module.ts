import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/secure.guard';
import { LivresComponent } from './livres/livres.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  {path: "livres", component : LivresComponent , canActivate:[AuthGuard],
  data : {roles:['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
