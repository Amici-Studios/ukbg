import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  getOffices(countryCollectionId: string, countyDocId: string, officeCollectionId: string) {
    return this.firestore
      .collection(countryCollectionId)
      .doc(countyDocId)
      .collection(officeCollectionId)
      .snapshotChanges()
      .pipe(
        map((docArray) => {
          return docArray.map((doc) => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data(),
            };
          });
        })
      );
  }
  getLancashire() {
    return this.firestore.collection('England').doc('Lancashire').collection('Lancashire Office').valueChanges();
  }

  addOffice(countryCollectionId: string, countyDocId: string, officeCollectionId: string) {
    return this.firestore.collection(countryCollectionId).doc(countyDocId).collection(officeCollectionId).add;
  }

  getOfficeDetails(officeCollectionId: string) {
    return this.firestore.collection('England').doc(officeCollectionId);
  }
}
