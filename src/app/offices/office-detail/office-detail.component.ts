import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../app/shared/services/firestore.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-office-detail',
  templateUrl: './office-detail.component.html',
  styleUrls: ['./office-detail.component.scss'],
})
export class OfficeDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private firestore: FirestoreService) {}

  officeInfo: any;
  countryCollectionId = 'England';
  countyDocId = 'Bedfordshire';
  officeCollectionId = 'Bedfordshire Office';

  ngOnInit(): void {
    this.getRegisterOffice();
  }
  getRegisterOffice() {
    this.firestore.getOffices(this.countryCollectionId, this.countyDocId, this.officeCollectionId).subscribe((res) => {
      this.officeInfo = res;
      console.log(res);
    });
  }
}
