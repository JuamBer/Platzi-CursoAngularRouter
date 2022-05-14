import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OnExit } from "../../../guards/exit.guard";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnExit {

  constructor() { }

  onExit() {
    const rta = confirm('Estas seguro de salir?');
    return rta;
  }

  ngOnInit(): void {
  }

}
