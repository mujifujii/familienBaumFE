import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Mock {
  private baseUrl = 'http://localhost:3000';

  http = inject(HttpClient)

  getPersons() {
    const headers = new HttpHeaders({
      'x-access-code': 'FAMILYTREE-SECRET-2026', // dein hardcodierter Code
    });

    return this.http.get(`${this.baseUrl}/person`, { headers });
  }

  // Person erstellen
  createPerson(firstName: string, lastName: string, alive: boolean = true, motherId?: number, fatherId?: number) {
    const headers = new HttpHeaders({
      'x-access-code': 'FAMILYTREE-SECRET-2026', // dein Guard-Code
      'Content-Type': 'application/json',
    });

    const body: any = { firstName, lastName, alive };
    if (motherId) body.motherId = motherId;
    if (fatherId) body.fatherId = fatherId;

    return this.http.post(`${this.baseUrl}/person`, body, { headers });
  }

  getPerson(){
    const headers = new HttpHeaders({
      'x-access-code': 'FAMILYTREE-SECRET-2026', // dein Guard-Code
      'Content-Type': 'application/json',
    });

    return this.http.get(`${this.baseUrl}/person`, { headers });
  }
}
