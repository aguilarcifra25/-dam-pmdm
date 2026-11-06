import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleDetailResponse } from '../../interfaces/vehicle-detail-response';

@Component({
  imports: [],
  selector: 'app-vehicle-detail-component',
  styleUrl: './vehicle-detail-component.css',
  templateUrl: './vehicle-detail-component.html',
})
export class VehicleDetailComponent {

  activeModal = inject(NgbActiveModal);

  @Input() vehicleDetail: VehicleDetailResponse | undefined;


}
