import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  /**
   * Creates an instance of PortfolioComponent.
   *
   * @param {TranslateService} translate - The service used for language translation.
   */
  constructor(public translate: TranslateService) { }


  /** List of projects with their image, name, used technologies, description, GitHub URL, and live test URL. */
  projects = [
    {
      'img': 'assets/portfolioImg/join.png',
      'name': 'Join',
      'usedTech': 'JavaScript | HTML | CSS | Git',
      'description': 'descriptionKey.join',
      'gitHubURL': 'https://github.com/Manuelkn2312/Join-dummy',
      'liveTestURL': 'https://manuel-knoell.developerakademie.net/Join-dummy/'
    },
    {
      'img': 'assets/portfolioImg/pokedex.png',
      'name': 'Pokédex',
      'usedTech': 'JavaScript | HTML | CSS | API',
      'description': 'descriptionKey.pokedex',
      'gitHubURL': 'https://github.com/Manuelkn2312/Pokedex',
      'liveTestURL': 'https://manuel-knoell.developerakademie.net/Pokedex/'
    },
    {
      'img': 'assets/portfolioImg/elPolloLoco.png',
      'name': 'El Pollo Loco',
      'usedTech': 'JavaScript | HTML | CSS | OOP',
      'description': 'descriptionKey.elPolloLoco',
      'gitHubURL': 'https://github.com/Manuelkn2312/El-Pollo-Loco',
      'liveTestURL': 'https://manuel-knoell.developerakademie.net/pollo-loco/'
    }
  ];
}