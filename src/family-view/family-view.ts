import {Component, inject, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {PersonService} from '../person-service/person-service';
import {IPerson} from '../types/IPerson';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-family-view',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './family-view.html',
  styleUrl: './family-view.scss',
  standalone: true
})
export class FamilyView {
  personService = inject(PersonService);

  public peopleInTheFamily:Signal<IPerson[]> = toSignal(this.personService.getPerson(), {initialValue: []})
}
