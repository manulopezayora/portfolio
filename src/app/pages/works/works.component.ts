import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  worksList = [
    {
      image:'../../../assets/img/Maps.png',
      title: 'Maps App',
      subtitle: 'HTML - CSS - JavaScript',
      tecnologies: 'vanila',
      explanation: 'Proyecto de marcador de mapas con la API de Leaflet. Las coordenadas son las que da google en la URL de google maps.'
    },
    {
      image:'../../../assets/img/Maps.png',
      title: 'Maps App',
      subtitle: 'HTML - CSS - JavaScript',
      tecnologies: 'vanila',
      explanation: 'Proyecto de marcador de mapas con la API de Leaflet. Las coordenadas son las que da google en la URL de google maps.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
