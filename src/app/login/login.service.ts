import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  USUARIOS_CONST = 'usuarios'

  constructor() { }

  criarUsuario(user: User) {
    let users = this.obterUsuarios()

    users.push(user);

    this.salvarUsuarios(users)
  }

  login(usuario: { email?: string, senha?: string }): Promise<User> {
    return new Promise((ok, rej) => {
      let user = this.obterUsuarios().find(x => x.email === usuario.email && x.senha == usuario.senha)
      if (user) {
        localStorage.setItem('logado', JSON.stringify(user))
        ok(user)
      } else {
        rej(`Não foi possível efetuar o login para o usuário ${usuario.email}. Verifique o usuário e a senha e tente novamente mais tarde`)
      }
    })
  }

  obterUsuarios(): User[] {
    let user = localStorage.getItem(this.USUARIOS_CONST)
    if (user !== null) {
      return JSON.parse(user)
    } else {
      return []
    }
  }

  obterUsuarioLogado(): User | null {
    let json = localStorage.getItem('logado')
    if (json !== null) {
      return JSON.parse(json)
    } else {
      return null
    }
  }

  salvarUsuarios(users: User[]) {
    localStorage.setItem(this.USUARIOS_CONST, JSON.stringify(users));
  }

}

interface User {
  nome?: string,
  telefones?: Telefone[],
  endereco?: Endereco,
  email?: string,
  senha?: string,
  acesso?: 'basic' | 'admin'
}

interface Endereco {
  cep?: string,
  logradouro?: string,
  bairro?: string,
  cidade?: string,
  estado?: string
}

interface Telefone {
  numero?: string,
  tipo?: 'Residencial' | 'Comercial' | 'Celular'
}
