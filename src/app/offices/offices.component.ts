import { FormsModule } from '@angular/forms';
import { GeneralApiService } from './../shared/services/general-api.service';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../shared/services/firestore.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [style({ opacity: 0 }), animate(1200)]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', animate(600, style({ opacity: 0 }))),
    ]),
  ],
})
export class OfficesComponent implements OnInit {
  constructor(private fireStoreService: FirestoreService, private general: GeneralApiService) {}
  countryCollectionId = '';
  countyDocId = '';
  officeCollectionId = '';
  offices: any;
  charities: any;
  office: any;
  county: any;
  bedfordshire = [{ countryCollectionId: 'England', countyDocId: 'Bedfordshire', officeCollectionId: 'Bedfordshire Office' }];

  ngOnInit() {}

  getRegisterOffice() {
    this.fireStoreService.getOffices(this.countryCollectionId, this.countyDocId, this.officeCollectionId).subscribe((res) => {
      this.offices = res;
      console.log(res);
    });
  }

  getLancashireRegisterOffice() {
    this.fireStoreService.getLancashire().subscribe((res) => {
      this.offices = res;
      console.log(this.offices);
    });
  }

  getCharities() {
    this.general.getCharities().subscribe((res) => {
      this.charities = res;
      console.log(res);
    });
  }
}
