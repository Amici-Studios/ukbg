import { FormsModule } from '@angular/forms';
import { GeneralApiService } from './../shared/services/general-api.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FirestoreService } from '../shared/services/firestore.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss'],
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
