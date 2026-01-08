import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Mock} from './mock';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-angular-app');

  service = inject(Mock)

  createPerson(){
    this.service.createPerson('max', 'mustermann').subscribe(person => {
      console.log(person)
    })
}
getPerson(){
    this.service.getPerson().subscribe(person => {
      console.log(person)
    })
}

}
