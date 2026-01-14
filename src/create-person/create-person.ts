import { Component, signal } from '@angular/core';
import {ICreatePerson} from '../types/ICreatePerson';
import {form } from '@angular/forms/signals';

@Component({
  selector: 'app-create-person',
  imports: [
  ],
  templateUrl: './create-person.html',
  styleUrl: './create-person.scss',
  standalone: true
})
export class CreatePerson {

  createPersonForm = signal<ICreatePerson>({
    name: '',
    lastName:''
  })

  form = form(this.createPersonForm)
}
