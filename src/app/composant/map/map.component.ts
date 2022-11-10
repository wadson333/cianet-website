import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import  * as L  from 'leaflet'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html', 
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  layerGroup= new L.LayerGroup();
  
  // marker object
  marker=L.marker([18.5130303,-72.2710205],{
    icon:new L.Icon({
      iconUrl: L.Icon.Default.prototype.options.iconUrl,
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    }),
    opacity:1,
  });
  
  constructor() { }
  ngOnInit(): void { }

  ngAfterViewInit(){
    this.addMap()
  }

  //map initialisation 
  addMap(){
    const map=L.map('map',{
      center:[18.5130303,-72.2710205],
      zoom:12
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      minZoom:12,
      maxZoom:20,
      attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    this.layerGroup.addTo(map);
    this.addMarker();
  }

  //add marker
  addMarker(){
    const text="usi"
    const popUp=new L.Popup();
    popUp.setContent(text); 
    this.layerGroup.addLayer(this.marker);
    this.marker.bindPopup(popUp).openPopup();
  }
  
}
