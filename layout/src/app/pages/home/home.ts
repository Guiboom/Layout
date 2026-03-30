import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  requisicao=[
    {
      tecnologia:'HTML',
      descricao:'Estrutura da página'
    },
    {
      tecnologia:'CSS',
      descricao:'Estilização da página'
    },
    {
      tecnologia:'JS',
      descricao:'Logica da página'
    },
  ];
}import { CommonModule } from '@angular/common';

