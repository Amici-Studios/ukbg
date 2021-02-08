import { Observable } from 'rxjs';
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
  officeDetail: any;
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.officeDetail = this.firestore.getOfficeDetails(`office-details/${id}`);
  }
}
