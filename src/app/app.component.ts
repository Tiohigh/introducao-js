import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menus = [
    {
      path: 'introducao',
      title: 'Introdução',
      children: [
        {
          path: 'string',
          title: 'String',
        },
        {
          path: 'number',
          title: 'Número',
        },
      ],
    },
  ];
}
