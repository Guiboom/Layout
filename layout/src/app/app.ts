import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Home } from './pages/home/home';
import { Footer } from './layout/footer/footer';
import { Farmador } from './pages/farmador/farmador';
import { Mogador } from './pages/mogador/mogador';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,Header,Home,Footer,Farmador,Mogador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('layout');
}
