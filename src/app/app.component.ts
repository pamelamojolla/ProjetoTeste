import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appClienteFoursys';

  loginService: LoginService
  router: Router

  constructor(
    loginService: LoginService,
    router: Router) {
    this.loginService = loginService
    this.router = router
  }

  ngOnInit(): void {
    let usuarioLogado = this.loginService.obterUsuarioLogado();
    if (usuarioLogado !== null) {
      this.router.navigate(["tela-inicial"])
    }
  }
}
