import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-fornecedor',
  templateUrl: './cadastro-fornecedor.component.html',
  styleUrls: ['./cadastro-fornecedor.component.css']
})
export class CadastroFornecedorComponent implements OnInit {

  razaoSocial: string = ''
  telefone: string = ''
  email: string = ''
  cep: string = ''
  endereco: string=''
  bairro: string=''
  cidade: string=''
  uf: string=''


  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
