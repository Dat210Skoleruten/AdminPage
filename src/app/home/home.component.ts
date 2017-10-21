import { KommuneService } from './../services/kommune/kommune.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Kommune } from '../models/kommune';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  kommuner: Kommune[];
  filteredKommuner: any[];
  kommunerSubscription: Subscription;

  constructor(
    private kommuneService: KommuneService) {
  }

  filter(query: string) {
    this.filteredKommuner = (query) ?
      this.kommuner.filter(k => k.name.toLowerCase().includes(query.toLowerCase())) :
      this.kommuner;
  }

  async ngOnInit() {
    const kommuner$ = await this.kommuneService.getAll();
    this.kommunerSubscription = kommuner$
      .subscribe(kommuner => this.filteredKommuner = this.kommuner = kommuner);
  }

  ngOnDestroy() {
    this.kommunerSubscription.unsubscribe();
  }
}
