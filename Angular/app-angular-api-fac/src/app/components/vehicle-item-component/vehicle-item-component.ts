import { Component, input, output } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle-list-response';

@Component({
  imports: [],
  selector: 'app-vehicle-item-component',
  styleUrl: './vehicle-item-component.css',
  templateUrl: './vehicle-item-component.html',
})
export class VehicleItemComponent {

  vehicleInput = input<Vehicle>()
  vehicleCliked = output<string>()

  emitVehicleCliked() {

    const id = this.vehicleInput()?.url.split('/')[5]!

    this.vehicleCliked.emit(id.toString())

  }


}
