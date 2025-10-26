
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'ds-themed-search-navbar-custom',
  styleUrls: ['./search-navbar.component.scss'],
  templateUrl: './search-navbar.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class SearchNavbarComponent {
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      query: [''],
      filter: [''],
    });
  }

  onSubmit(value: any): void {
    const query = (value.query || '').trim();
    const filter = value.filter || '';
    let url = '/search?spc.page=1';

    if (filter && query) {
      url += `&f.${filter}=${encodeURIComponent(query)},contains`;
    } else if (query) {
      url += `&query=${encodeURIComponent(query)}`;
    }

    window.location.href = url;
  }
}
