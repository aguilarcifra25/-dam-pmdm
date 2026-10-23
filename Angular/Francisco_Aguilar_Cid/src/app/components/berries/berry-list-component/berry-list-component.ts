import { Component, inject, signal } from '@angular/core';
import { BerryService } from '../../../services/berries/berry-service';
import { Berry } from '../../../interfaces/berries/berry-list-response';
import { BerryItemComponent } from '../berry-item-component/berry-item-component';

@Component({
  imports: [BerryItemComponent],
  selector: 'app-berry-list-component',
  styleUrl: './berry-list-component.css',
  templateUrl: './berry-list-component.html',
})
export class BerryListComponent {

  berryService = inject(BerryService);
  berriesList = signal<Berry[]>([]);

  getBerryId(url: string): string {
    return url.split('/').filter(Boolean).pop()!;
  }

  ngOnInit(): void {
    this.berryService.getAllBerries().subscribe(resp => {

      this.berriesList.set(resp.results);
    });
  }

}
