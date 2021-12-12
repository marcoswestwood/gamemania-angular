import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  userModel = new User("", "")

  mensagem = "";

  onSubmit() {

    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*" ]

    listaPalavras.forEach(palavra => {
      if (this.userModel.email?.toLowerCase().includes(palavra)) {
        this.mensagem = "Dados inválidos: " + palavra

        return;
      }
    });

    this.loginService.login(this.userModel).subscribe( (response) => {
      this.mensagem = "Login efetuado com sucesso!";
      this.router.navigateByUrl("/");

    }, (error) => {
      console.log(error)
      this.mensagem = error.error;
    } )
  }

}
