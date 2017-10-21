import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AppUser } from '../../models/app-user';

@Injectable()
export class UserService {
  appUser: AppUser;

  constructor(
    private afDB: AngularFireDatabase) { }

    save(user: firebase.User) {
      this.afDB.object('/user/' + user.uid).update({
        name: user.displayName,
        email: user.email
      });
    }

    get(uid: string): FirebaseObjectObservable<AppUser> {
      return this.afDB.object('/user/' + uid);
    }
}
