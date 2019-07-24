import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-stye',
  template: `
    <p [style.fontSize.px]="tamano">
      Esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyeComponent implements OnInit {

  tamano: number = 10;
  constructor() { }

  ngOnInit() {
  }

}
