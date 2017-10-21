import { KommuneService } from './../services/kommune/kommune.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-kommune-form',
  templateUrl: './kommune-form.component.html',
  styleUrls: ['./kommune-form.component.css']
})
export class KommuneFormComponent {
  kommune = {};
  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kommuneService: KommuneService) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.kommuneService.get(this.id).take(1)
      .subscribe(k => this.kommune = k);
  }

  save(kommune) {
    if (this.id) this.kommuneService.update(this.id, kommune);
    else this.kommuneService.create(kommune);

    this.router.navigate(['/']);
  }

  delete() {
    if (!confirm('Sikker?')) return;

    this.kommuneService.delete(this.id);
    this.router.navigate(['/']);
  }
}