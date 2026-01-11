import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {PersonService} from '../person-service/person-service';
import {IPerson} from '../types/IPerson';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-family-view',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './family-view.html',
  styleUrl: './family-view.scss',
  standalone: true
})
export class FamilyView implements OnInit{
  personService = inject(PersonService);
  personsSignal:WritableSignal<IPerson[]> = signal([])


  ngOnInit() {
    this.personService.getPerson().subscribe(person => {
      this.personsSignal.set(person)
    })
  }
}
