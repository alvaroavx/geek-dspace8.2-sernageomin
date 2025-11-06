import {
  AsyncPipe,
  NgIf,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ViewMode } from '../../../../core/shared/view-mode.model';
import { DsoEditMenuComponent } from '../../../../shared/dso-page/dso-edit-menu/dso-edit-menu.component';
import { MetadataFieldWrapperComponent } from '../../../../shared/metadata-field-wrapper/metadata-field-wrapper.component';
import { listableObjectComponent } from '../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { ThemedResultsBackButtonComponent } from '../../../../shared/results-back-button/themed-results-back-button.component';
import { ThemedThumbnailComponent } from '../../../../thumbnail/themed-thumbnail.component';
import { CollectionsComponent } from '../../../field-components/collections/collections.component';
import { ThemedMediaViewerComponent } from '../../../media-viewer/themed-media-viewer.component';
import { MiradorViewerComponent } from '../../../mirador-viewer/mirador-viewer.component';
import { ThemedFileSectionComponent } from '../../field-components/file-section/themed-file-section.component';
import { ItemPageAbstractFieldComponent } from '../../field-components/specific-field/abstract/item-page-abstract-field.component';
import { ItemPageDateFieldComponent } from '../../field-components/specific-field/date/item-page-date-field.component';
import { GenericItemPageFieldComponent } from '../../field-components/specific-field/generic/generic-item-page-field.component';
import { ThemedItemPageTitleFieldComponent } from '../../field-components/specific-field/title/themed-item-page-field.component';
import { ItemPageUriFieldComponent } from '../../field-components/specific-field/uri/item-page-uri-field.component';
import { ThemedMetadataRepresentationListComponent } from '../../metadata-representation-list/themed-metadata-representation-list.component';
import { RelatedItemsComponent } from '../../related-items/related-items-component';
import { ItemComponent } from '../shared/item.component';

/**
 * Component that represents a publication Item page
 */

@listableObjectComponent('Publication', ViewMode.StandalonePage)
@Component({
  selector: 'ds-publication',
  styleUrls: ['./publication.component.scss'],
  templateUrl: './publication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, ThemedResultsBackButtonComponent, MiradorViewerComponent, ThemedItemPageTitleFieldComponent, DsoEditMenuComponent, MetadataFieldWrapperComponent, ThemedThumbnailComponent, ThemedMediaViewerComponent, ThemedFileSectionComponent, ItemPageDateFieldComponent, ThemedMetadataRepresentationListComponent, GenericItemPageFieldComponent, RelatedItemsComponent, ItemPageAbstractFieldComponent, ItemPageUriFieldComponent, CollectionsComponent, RouterLink, AsyncPipe, TranslateModule],
})
export class PublicationComponent extends ItemComponent implements OnInit {
  qrCodeUrl: string;
  currentUrl: string;
  fullUrl: string;
  editMetadata: string;
  format = 'sernageomin';

  private readonly isBrowser =
    typeof window !== 'undefined' && typeof document !== 'undefined';

  ngOnInit(): void {
    if (!this.isBrowser) {return;}

    this.generateQRCodeUrl();
    this.currentUrl = window.location.href;
    this.fullUrl = window.location.pathname + '/full';
    this.editMetadata = window.location.pathname + '/edit/metadata';
  }

  generateQRCodeUrl(): void {
    if (!this.isBrowser) {return;}
    const currentUrl = encodeURIComponent(window.location.href);
    this.qrCodeUrl =
      `https://quickchart.io/qr?text=${currentUrl}&dark=000000&size=100&centerImageUrl=` +
      `https://clientes.infodi.cl/sernageomin/imagenes/avatar.png`;
  }

  onFormatChange(event: any): void {
    this.format = event?.target?.value ?? this.format;
  }

  getUriValue(): string {
    const md = (this as any).object?.metadata?.['dc.identifier.uri'];
    return Array.isArray(md) && md[0]?.value ? md[0].value : '';
  }

  getCitationValue(): string {
    const md = (this as any).object?.metadata?.['dc.identifier.citation'];
    return Array.isArray(md) && md[0]?.value ? md[0].value : '';
  }

  copyToClipboard(): void {
    if (!this.isBrowser) {return;}
    const el = document.getElementById('uriField') as HTMLInputElement | null;
    if (!el) {return;}

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(el.value).then(
        () => alert('URI copiada: ' + el.value),
        () => this.fallbackCopy(el),
      );
    } else {
      this.fallbackCopy(el);
    }
  }

  copyCitationToClipboard(): void {
    if (!this.isBrowser) {return;}
    const el = document.getElementById('citationField') as HTMLInputElement | null;
    if (!el) {return;}

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(el.value).then(
        () => alert('Cita copiada: ' + el.value),
        () => this.fallbackCopy(el),
      );
    } else {
      this.fallbackCopy(el);
    }
  }

  private fallbackCopy(input: HTMLInputElement) {
    try {
      input.select();
      input.setSelectionRange(0, 99999);
      document.execCommand('copy');
      alert('URI copiada: ' + input.value);
    } catch {
      return;
    }
  }

}
