import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { data } from '../../data/data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [RouterLink, NgFor],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  imageCover: string = '';
  dateContent: string = '';
  titleContent: string = '';
  descriptionContent?: string = '';
  private id: string | null = '';
  listContent: { label: string; value: string }[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValues(this.id);
  }

  setValues(id: string | null) {
    const result = data.filter((value) => value.id.toString() == id)[0];

    this.imageCover = result.image;
    this.dateContent = result.date;
    this.titleContent = result.title;
    this.descriptionContent = result.description;

    this.listContent = [
      { label: 'Data', value: result.date },
      { label: 'Escritor', value: 'Jonatas' },
      { label: 'Estimativa', value: result.readTime },
      { label: 'Categoria', value: result.category },
    ];
  }
}
