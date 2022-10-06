import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  leao: string = "https://st2.depositphotos.com/2100659/8236/v/600/depositphotos_82367108-stock-illustration-lion-head-vector-sign-concept.jpg"
  loginService: LoginService
  router: Router
  alerterror: any = null

  login: { email?: string, senha?: string } = {}

  constructor(loginService: LoginService, router: Router) {
    this.loginService = loginService
    this.router = router
  }
  ngOnInit(): void {
    this.loginService.salvarUsuarios([{
      email: 'admin@admin.com',
      senha: 'admin',
      acesso: 'admin'
    }])
  }

  onSubmit() {
    this.loginService
      .login(this.login)
      .then(ok => {
        this.router.navigate(['tela-inicial'])
      }, nok => {
        this.alerterror = nok
      })
  }

}
