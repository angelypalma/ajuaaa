import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,                       // ← NECESARIO EN ANGULAR 17+
  imports: [CommonModule],                // ← NECESARIO PARA *ngFor y *ngIf
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  productos = [
    {
      imagen: 'img/1.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    },
    {
      imagen: 'img/2.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    },
    {
      imagen: 'img/3.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    },
    {
      imagen: 'img/4.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    },
    {
      imagen: 'img/5.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    },
    {
      imagen: 'img/6.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    }
  ];

  comicsVendidos = [
    {
      imagen: 'img/7.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    },
    {
      imagen: 'img/1.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    },
    {
      imagen: 'img/8.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    },
    {
      imagen: 'img/3.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    },
    {
      imagen: 'img/10.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    },
    {
      imagen: 'img/7.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    }
  ];

}
