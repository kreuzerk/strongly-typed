import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {DisplayComponent} from "./display.component";
import {TypeGuardDirective} from "./type-guard.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, DisplayComponent, TypeGuardDirective]
})
export class AppComponent {
  title = 'strongly-typed';
  user = {name: 'John Doe'};
  product = {title: 'iPhone 12', description: 'The latest iPhone'};
}
