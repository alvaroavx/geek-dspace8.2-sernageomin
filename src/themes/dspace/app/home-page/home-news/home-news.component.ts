import { Component } from '@angular/core';
import { HomeNewsComponent as BaseComponent } from '../../../../../app/home-page/home-news/home-news.component';
import { SearchNavbarComponent } from '../../search-navbar/search-navbar.component';

@Component({
  selector: 'ds-themed-home-news',
  styleUrls: ['./home-news.component.scss'],
  templateUrl: './home-news.component.html',
  standalone: true,
  imports: [SearchNavbarComponent],
})

/**
 * Component to render the news section on the home page
 */
export class HomeNewsComponent extends BaseComponent {}

