import { Component } from '@angular/core';

interface Tasks {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})

export class RegistrarComponent {
  tasks: Tasks[] = [
    {value: 'jogo-0', viewValue: 'Jogo'},
    {value: 'mercado-1', viewValue: 'Mercado'},
    {value: 'despesas-2', viewValue: 'Despesas'},
  ];

}
