import { Component } from '@angular/core';

import { ThemedSearchNavbarComponent } from '../../search-navbar/themed-search-navbar.component';

@Component({
  selector: 'ds-base-home-news',
  styleUrls: ['./home-news.component.scss'],
  templateUrl: './home-news.component.html',
  standalone: true,
  imports: [ThemedSearchNavbarComponent],
})

/**
 * Component to render the news section on the home page
 */
export class HomeNewsComponent {
}
