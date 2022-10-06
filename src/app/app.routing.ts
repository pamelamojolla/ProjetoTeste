
import{ ModuleWithProviders, NgModule } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router';


import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { ClientesComponent } from './clientes/clientes.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'tela-inicial', component: TelaInicialComponent},
  { path: 'login', component: LoginComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'fornecedores', component: FornecedoresComponent},
  { path: 'clientes', component: ClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
