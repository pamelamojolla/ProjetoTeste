import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CadastroClientesComponent } from './clientes/cadastro-clientes/cadastro-clientes.component';
import { CadastroFornecedorComponent } from './fornecedores/cadastro-fornecedor/cadastro-fornecedor.component';
import { CadastrosUsuariosComponent } from './usuarios/cadastros-usuarios/cadastros-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TelaInicialComponent,
    UsuariosComponent,
    ClientesComponent,
    FornecedoresComponent,
    FooterComponent,
    HeaderComponent,
    CadastroClientesComponent,
    CadastroFornecedorComponent,
    CadastrosUsuariosComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
