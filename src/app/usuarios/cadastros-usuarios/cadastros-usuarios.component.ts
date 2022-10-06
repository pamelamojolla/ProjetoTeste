import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastros-usuarios',
  templateUrl: './cadastros-usuarios.component.html',
  styleUrls: ['./cadastros-usuarios.component.css']
})
export class CadastrosUsuariosComponent implements OnInit {

  nome: string=''
  email:string=''
  senha: string=''

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
