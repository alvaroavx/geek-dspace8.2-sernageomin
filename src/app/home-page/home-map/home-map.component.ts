import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { RegionService } from './region.service';
import { Regiones } from './regiones';

@Component({
  selector: 'ds-home-map',
  standalone: true,
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.scss'],
  imports: [CommonModule, NgbNavModule, FormsModule, RouterModule],
})
export class HomeMapComponent implements OnInit {
  constructor(private regionService: RegionService) {}
  zoneNorth = 'zoneNorth';
  zoneSouthCentral = 'zoneSouthCentral';
  zoneAustral = 'zoneAustral';
  statusClass = this.zoneNorth;

  antarticafill = '#ED9F58';
  region: any = 'arica_parinacota';
  arica_parinacota: any;
  tarapaca: any;
  antofagasta: any;
  atacama: any;
  coquimbo: any;
  valparaiso: any;
  santiago: any;
  bernado_ohggins: any;
  maule: any;
  nuble: any;
  biobio: any;
  araucania: any;
  rios: any;
  lagos: any;
  aysen: any;
  magallanes: any;
  Clicked: boolean;

  regiones: Regiones[];
  regionSelected: number;
  currentRouterLink = '/search';

  Items: any = [];
  links: any;
  geologia: any;
  peligros: any;
  geofisica: any;
  recursos: any;
  volcanologia: any;
  estadistica: any;

  cartografia: any;
  informes: any;
  congresos: any;
  series: any;
  revistas: any;
  audiovisuales: any;

  geologia_link: any;
  peligros_link: any;
  geofisica_link: any;
  recursos_link: any;
  volcanologia_link: any;
  estadistica_link: any;

  cartografia_link: any;
  informes_link: any;
  congresos_link: any;
  series_link: any;
  revistas_link: any;
  audiovisuales_link: any;

  destacado_imagen: any;
  destacado_url: any;

  updateRouterLink(newLink: string) {
    this.currentRouterLink = newLink;
  }

  onZoneClicked(zone) {
    this.statusClass = zone;
  }

  clickMap(check) {
    this.regionSelected = check;
    if (check === 15) {
      this.updateRouterLink('/search?query=&f.region=Región de Arica y Parinacota,equals&spc.page=1');
      this.region = 'arica_parinacota';
    } else if (check === 1) {
      this.updateRouterLink('/search?query=&f.region=Región de Tarapacá,equals&spc.page=1');
      this.region = 'tarapaca';
    } else if (check === 2) {
      this.updateRouterLink('/search?query=&f.region=Región de Antofagasta,equals&spc.page=1');
      this.region = 'antofagasta';
    } else if (check === 3) {
      this.updateRouterLink('/search?query=&f.region=Región de Atacama,equals&spc.page=1');
      this.region = 'atacama';
    } else if (check === 4) {
      this.updateRouterLink('/search?query=&f.region=Región de Coquimbo,equals&spc.page=1');
      this.region = 'coquimbo';
    } else if (check === 5) {
      this.updateRouterLink('/search?query=&f.region=Región de Valparaíso,equals&spc.page=1');
      this.region = 'valparaiso';
    } else if (check === 13) {
      this.updateRouterLink('/search?query=&f.region=Región Metropolitana de Santiago,equals&spc.page=1');
      this.region = 'santiago';
    } else if (check === 6) {
      this.updateRouterLink("/search?query=&f.region=Región del Libertador General Bernardo O'Higgins,equals&spc.page=1");
      this.region = 'bernado_ohggins';
    } else if (check === 7) {
      this.updateRouterLink('/search?query=&f.region=Región del Maule,equals&spc.page=1');
      this.region = 'maule';
    } else if (check === 16) {
      this.updateRouterLink('/search?query=&f.region=Región de Ñuble,equals&spc.page=1');
      this.region = 'nuble';
    } else if (check === 8) {
      this.updateRouterLink('/search?query=&f.region=Región del BioBio,equals&spc.page=1');
      this.region = 'biobio';
    } else if (check === 9) {
      this.updateRouterLink('/search?query=&f.region=Región de la Araucanía,equals&spc.page=1');
      this.region = 'araucania';
    } else if (check === 14) {
      this.updateRouterLink('/search?query=&f.region=Región de los Rios,equals&spc.page=1');
      this.region = 'rios';
    } else if (check === 10) {
      this.updateRouterLink('/search?query=&f.region=Región de los Lagos,equals&spc.page=1');
      this.region = 'lagos';
    } else if (check === 11) {
      this.updateRouterLink('/search?query=&f.region=Región Aysén del General Carlos Ibáñez del Campo,equals&spc.page=1');
      this.region = 'aysen';
    } else if (check === 12) {
      this.updateRouterLink('/search?query=&f.region=Región de Magallanes y la Antártica chilena,equals&spc.page=1');
      this.region = 'magallanes';
    }
    this.getRegionData(check);
  }

  onMouseEnter(event) {
    if (event) {
      this.antarticafill = '#813617';
    } else {
      this.antarticafill = '#ED9F58';
    }
  }

  ngOnInit() {
    this.regionService.getRegionItems().subscribe(data => {
      // Verifica que exista y que tenga al menos un objeto
      if (data && data.length > 0) {
        const regionData = data[0];

        this.arica_parinacota = regionData?.arica_parinacota ?? '';
        this.tarapaca        = regionData?.tarapaca ?? '';
        this.antofagasta     = regionData?.antofagasta ?? '';
        this.atacama         = regionData?.atacama ?? '';
        this.coquimbo        = regionData?.coquimbo ?? '';
        this.valparaiso      = regionData?.valparaiso ?? '';
        this.santiago        = regionData?.santiago ?? '';
        this.bernado_ohggins = regionData?.bernado_ohggins ?? '';
        this.maule           = regionData?.maule ?? '';
        this.nuble           = regionData?.nuble ?? '';
        this.biobio          = regionData?.biobio ?? '';
        this.araucania       = regionData?.araucania ?? '';
        this.rios            = regionData?.rios ?? '';
        this.lagos           = regionData?.lagos ?? '';
        this.aysen           = regionData?.aysen ?? '';
        this.magallanes      = regionData?.magallanes ?? '';
      } else {
        console.warn('No se recibieron datos de regiones');
      }
    });

    this.regiones = [
      { Id: '15', Name: 'Región de Arica y Parinacota' },
      { Id: '01', Name: 'Región de Tarapacá' },
      { Id: '02', Name: 'Región de Antofagasta' },
      { Id: '03', Name: 'Región de Atacama' },
      { Id: '04', Name: 'Región de Coquimbo' },
      { Id: '05', Name: 'Región de Valparaíso' },
      { Id: '13', Name: 'Región Metropolitana de Santiago' },
      { Id: '06', Name: "Región del Libertador General Bernardo O'Higgins" },
      { Id: '07', Name: 'Región del Maule' },
      { Id: '16', Name: 'Región de Ñuble' },
      { Id: '08', Name: 'Región del BioBio' },
      { Id: '09', Name: 'Región de la Araucanía' },
      { Id: '14', Name: 'Región de los Rios' },
      { Id: '10', Name: 'Región de los Lagos' },
      { Id: '11', Name: 'Región Aysén del General Carlos Ibáñez del Campo' },
      { Id: '12', Name: 'Región de Magallanes y la Antártica chilena222' },
    ];
    this.regionSelected = 15;


    this.regionService.getRegionItems().subscribe(data => {
      this.Items = data;
      this.getRegionData(this.regionSelected); // Usar getRegionData en lugar de loadRegionData
    });


  }

  getRegionData(check) {

    Array.from(this.Items).forEach((item: any) => {
      if (item.numero === check) {
        this.links = item.links;

        this.geologia = item.tema.geologia;
        this.peligros = item.tema.peligros;
        this.geofisica = item.tema.geofisica;
        this.recursos = item.tema.recursos;
        this.volcanologia = item.tema.volcanologia;
        this.estadistica = item.tema.estadistica;

        this.cartografia = item.tipo.cartografia;
        this.informes = item.tipo.informes;
        this.congresos = item.tipo.congresos;
        this.series = item.tipo.series;
        this.revistas = item.tipo.revistas;
        this.audiovisuales = item.tipo.audiovisuales;

        this.geologia_link = item.tema_link.geologia;
        this.peligros_link = item.tema_link.peligros;
        this.geofisica_link = item.tema_link.geofisica;
        this.recursos_link = item.tema_link.recursos;
        this.volcanologia_link = item.tema_link.volcanologia;
        this.estadistica_link = item.tema_link.estadistica;

        this.cartografia_link = item.tipo_link.cartografia;
        this.informes_link = item.tipo_link.informes;
        this.congresos_link = item.tipo_link.congresos;
        this.series_link = item.tipo_link.series;
        this.revistas_link = item.tipo_link.revistas;
        this.audiovisuales_link = item.tipo_link.audiovisuales;

        this.destacado_imagen = item.destacado.imagen;
        this.destacado_url = item.destacado.url;
      }
    });
  }

  onRegionSelected(check: any) {

    if (check === 15) {
      this.updateRouterLink('/search?query=&f.region=Región de Arica y Parinacota,equals&spc.page=1');
      this.region = 'arica_parinacota';
      this.statusClass = 'zoneNorth';
    } else if (check === 1) {
      this.updateRouterLink('/search?query=&f.region=Región de Tarapacá,equals&spc.page=1');
      this.region = 'tarapaca';
      this.statusClass = 'zoneNorth';
    } else if (check === 2) {
      this.updateRouterLink('/search?query=&f.region=Región de Antofagasta,equals&spc.page=1');
      this.region = 'antofagasta';
      this.statusClass = 'zoneNorth';
    } else if (check === 3) {
      this.updateRouterLink('/search?query=&f.region=Región de Atacama,equals&spc.page=1');
      this.region = 'atacama';
      this.statusClass = 'zoneNorth';
    } else if (check === 4) {
      this.updateRouterLink('/search?query=&f.region=Región de Coquimbo,equals&spc.page=1');
      this.region = 'coquimbo';
      this.statusClass = 'zoneNorth';
    } else if (check === 5) {
      this.updateRouterLink('/search?query=&f.region=Región de Valparaíso,equals&spc.page=1');
      this.region = 'valparaiso';
      this.statusClass = 'zoneSouthCentral';
    } else if (check === 13) {
      this.updateRouterLink('/search?query=&f.region=Región Metropolitana de Santiago,equals&spc.page=1');
      this.region = 'santiago';
      this.statusClass = 'zoneSouthCentral';
    } else if (check === 6) {
      this.updateRouterLink("/search?query=&f.region=Región del Libertador General Bernardo O'Higgins,equals&spc.page=1");
      this.region = 'bernado_ohggins';
      this.statusClass = 'zoneSouthCentral';
    } else if (check === 7) {
      this.updateRouterLink('/search?query=&f.region=Región del Maule,equals&spc.page=1');
      this.region = 'maule';
      this.statusClass = 'zoneSouthCentral';
    } else if (check === 16) {
      this.updateRouterLink('/search?query=&f.region=Región de Ñuble,equals&spc.page=1');
      this.region = 'nuble';
      this.statusClass = 'zoneSouthCentral';
    } else if (check === 8) {
      this.updateRouterLink('/search?query=&f.region=Región del BioBio,equals&spc.page=1');
      this.region = 'biobio';
      this.statusClass = 'zoneSouthCentral';
    } else if (check === 9) {
      this.updateRouterLink('/search?query=&f.region=Región de la Araucanía,equals&spc.page=1');
      this.region = 'araucania';
      this.statusClass = 'zoneSouthCentral';
    } else if (check === 14) {
      this.updateRouterLink('/search?query=&f.region=Región de los Rios,equals&spc.page=1');
      this.region = 'rios';
      this.statusClass = 'zoneSouthCentral';
    } else if (check === 10) {
      this.updateRouterLink('/search?query=&f.region=Región de los Lagos,equals&spc.page=1');
      this.region = 'lagos';
      this.statusClass = 'zoneSouthCentral';
    } else if (check === 11) {
      this.updateRouterLink('/search?query=&f.region=Región Aysén del General Carlos Ibáñez del Campo,equals&spc.page=1');
      this.region = 'aysen';
      this.statusClass = 'zoneAustral';
    } else if (check === 12) {
      this.updateRouterLink('/search?query=&f.region=Región de Magallanes y la Antártica chilena,equals&spc.page=1');
      this.region = 'magallanes';
      this.statusClass = 'zoneAustral';
    }
    this.getRegionData(check);
  }

}

