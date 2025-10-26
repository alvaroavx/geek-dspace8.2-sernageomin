import { Component } from '@angular/core';

import { HomeNewsComponent as BaseComponent } from '../../../../../app/home-page/home-news/home-news.component';
import { ThemedSearchNavbarComponent } from '../../../../../app/search-navbar/themed-search-navbar.component';
import { SearchNavbarComponent } from '../../search-navbar/search-navbar.component';

@Component({
  selector: 'ds-themed-home-news',
  styleUrls: ['./home-news.component.scss'],
  templateUrl: './home-news.component.html',
  standalone: true,
  imports: [ThemedSearchNavbarComponent, SearchNavbarComponent],
})

/**
 * Component to render the news section on the home page
 */
export class HomeNewsComponent extends BaseComponent {}

