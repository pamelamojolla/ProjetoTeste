import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/models/users';


@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  formUsuario: Users
  cepNaoEncontrado: boolean = false
  formularioInvalido: boolean =false

  nome: string = ''
  telefone: string = ''
  email: string = ''
  cep: string = ''
  endereco: string=''
  bairro: string=''
  cidade: string=''
  uf: string=''

  constructor(
    private _http: HttpClient,
    // private _usersService: UserService,
    private _router: Router,

  ) {
    this.formUsuario = new Users()
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }


  buscaEndereco(e: any){
    console.log("e =>", e.target.value)
    this._http.get("http://viacep.com.br/ws/"+this.formUsuario.endereco.cep+"/json/").subscribe((dataCep: any)=>{
      if(dataCep.erro){
        this.cepNaoEncontrado = true
        setTimeout(()=> {
          this.formUsuario.endereco.cep = ''
          this.cepNaoEncontrado = false
        }, 2000)
        return
      }
      this.formUsuario.endereco.logradouro = dataCep['logradouro']
      this.formUsuario.endereco.bairro = dataCep['bairro']
      this.formUsuario.endereco.cidade = dataCep['localidade']
      this.formUsuario.endereco.logradouro = dataCep['uf']

    })
  }

  // goSalvar(){
  //   if(this.formUsuario.nome === "" || this.formUsuario.email ===""
  //   || this.formUsuario.senha === "" || this.formUsuario.acesso ===""){
  //     this.formularioInvalido = true
  //     setTimeout(()=>{
  //       this.formularioInvalido = false
  //     },3000)
  //     return
  //   }
  //   this._userServices.postItem(this.formUsuario).subscribe(data =>{
  //     console.log("Data",data)
  //     this._router.navigate(['/users'])
  //   })
  // }

}
