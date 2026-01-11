import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FamilyView} from '../family-view/family-view';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FamilyView],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-angular-app');

}
