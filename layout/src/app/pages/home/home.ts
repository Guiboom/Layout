import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  requisicao=[
    {
      tecnologia:'HTML (HyperText Markup Language)',
      descricao:'O HTML é a espinha dorsal de qualquer site. Não é uma linguagem de programação, mas sim uma linguagem de marcação usada para estruturar e organizar o conteúdo de uma página. Através de "tags" (como <p>, <h1>, <div>), você diz ao navegador o que é um parágrafo, um título, uma imagem ou um link. Pense no HTML como a estrutura de concreto e tijolos de uma casa: ele define onde ficarão as paredes, portas e janelas, mas sem nenhum acabamento visual'
    },
    {
      tecnologia:'CSS (Cascading Style Sheets)',
      descricao:'O CSS é a linguagem responsável por dar estilo, beleza e layout ao conteúdo estruturado pelo HTML. Com ele, é possível definir cores, fontes, tamanhos, espaçamentos, bordas e, crucialmente, criar designs responsivos que se adaptam a diferentes tamanhos de tela (computador, tablet, celular). Se o HTML é a estrutura da casa, o CSS é a pintura, a decoração e o acabamento final que torna o ambiente atraente e agradável.'
    },
    {
      tecnologia:'JavaScript (JS)',
      descricao:'O JavaScript é uma linguagem de programação de alto nível que transforma páginas estáticas em experiências dinâmicas e interativas. Enquanto HTML e CSS cuidam da estrutura e visual, o JS permite que o site responda a ações do usuário, como abrir um menu, exibir animações, validar formulários, carregar novos dados sem atualizar a página ou exibir pop-ups. É a inteligência do site, permitindo funcionalidades complexas e comportamento em tempo real.'
    },
  ];
}

