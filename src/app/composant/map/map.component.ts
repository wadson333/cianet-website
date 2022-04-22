import { Component, OnInit,AfterViewInit,OnChanges,OnDestroy, Input, ElementRef, ViewChild } from '@angular/core';
import  * as L  from 'leaflet'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html', 
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() height="h-0";
  @Input() width="w-0";
  @ViewChild("map",{static:false}) mapref!:ElementRef;

  marker=L.marker([18.5130303,-72.2710205],{
    icon:new L.Icon({
      iconUrl: L.Icon.Default.prototype.options.iconUrl,
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    }),
    opacity:1,
  });
  
  layerGroup= new L.LayerGroup();

  constructor() { }

  ngOnInit(): void {
      
  }

  ngAfterViewInit(){
    this.mapref.nativeElement.classList.add(this.height)
    this.mapref.nativeElement.classList.add(this.width)
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
