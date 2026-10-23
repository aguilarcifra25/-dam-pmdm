import { Component, inject } from '@angular/core';
import { BerryService } from '../../../services/berries/berry-service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-berry-detail-component',
  styleUrl: './berry-detail-component.css',
  templateUrl: './berry-detail-component.html',
})
export class BerryDetailComponent {

  private berryService = inject(BerryService);
  private route = inject(ActivatedRoute);

  berry = toSignal(
    this.route.params.pipe(
      map((params) => params['id'] as string),
      switchMap((id) => this.berryService.getOneBerry(id)),
    ),
  );

}
