import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    template: `
         <div class="dynamic-template" [ngClass]="{'red': isRed, 'blue': isBlue}">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
      <button (click)="changeColor()">{{ titleButton }}</button>
    </div>
  `,
  styles: [
    `
     .dynamic-template {
        background-color: #fff;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
     .red {
        background-color: #ff0000;
      }
     .blue {
        background-color: #0000ff;
      }
    `
  ],
})

export class HomeComponent {
    isRed = true;
    isBlue = false;
    title = 'Dynamic Template';
    content = 'This is a dynamic template created in Angular using CSS.';
    titleButton = 'BLUE'

    changeColor() {
        this.isBlue = !this.isBlue
        this.isRed = !this.isRed
        this.isBlue ? this.titleButton = "RED" : this.titleButton = "BLUE"
    }

}