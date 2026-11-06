import { Component, inject, OnInit, signal } from '@angular/core';
import { VehicleService } from '../../services/vehicle-service';
import { VehicleItemComponent } from '../vehicle-item-component/vehicle-item-component';
import { Vehicle } from '../../interfaces/vehicle-list-response';
import { VehicleDetailComponent } from '../vehicle-detail-component/vehicle-detail-component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [VehicleItemComponent],
  selector: 'app-vehicle-list-component',
  styleUrl: './vehicle-list-component.css',
  templateUrl: './vehicle-list-component.html',
})
export class VehicleListComponent implements OnInit {

  vehicleService = inject(VehicleService)

  vehicleList = signal<Vehicle[]>([])

  private modalService = inject(NgbModal)

  ngOnInit(): void {

    this.vehicleService.getAllVehicle().subscribe(resp => {

      this.vehicleList.set(resp.results)

    })

  }

  openVehicleModal(id: string) {

    this.vehicleService.getOneVehicle(id).subscribe(resp => {

      const modalRef = this.modalService.open(VehicleDetailComponent);
      modalRef.componentInstance.vehicleDetail = resp;
    });

  }

}
