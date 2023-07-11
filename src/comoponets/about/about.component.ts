import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div *ngFor="let item of items">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <img [src]="item.image" alt="{{ item.title }}">
        </div>
    `,
})

export class AboutComponent {
    items = [
        {
          title: 'Item 1',
          description: 'This is the description for item 1',
          image: 'https://example.com/item1.jpg'
        },
        {
          title: 'Item 2',
          description: 'This is the description for item 2',
          image: 'https://example.com/item2.jpg'
        },
        {
          title: 'Item 3',
          description: 'This is the description for item 3',
          image: 'https://example.com/item3.jpg'
        }
      ];
}