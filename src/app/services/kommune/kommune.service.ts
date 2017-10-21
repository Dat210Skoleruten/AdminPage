import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class KommuneService {

  constructor(
    private afDB: AngularFireDatabase) {
  }

  getAll() {
    return this.afDB.list(`/`);
  }

  get(productId) {
    return this.afDB.object(`` + productId);
  }

  create(kommune) {
    return this.afDB.list(``).push(kommune);
  }

  update(kommuneId, kommune) {
    return this.afDB.object(`` + kommuneId).update(kommune);
  }

  delete(kommuneId) {
    return this.afDB.object(`` + kommuneId).remove();
  }

}