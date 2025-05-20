import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  imports: [NgFor],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css',
})
export class MenuBarComponent {
  menu: string[] = [
    'Aprender',
    'Atalho',
    'Blog',
    'Marcadores',
    'UI Kit',
    'FAQ',
    'Outro',
  ];
}
