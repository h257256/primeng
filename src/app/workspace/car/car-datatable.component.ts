import { Component, OnInit } from '@angular/core';
import { Car } from './car';
@Component({
    templateUrl: './car-datatable.component.html'
})

export class CarDataTableComponent implements OnInit {
    cars: Car[];
    constructor() { }

    ngOnInit() {
        this.cars = [
            {vin: 'vin1', year: 'year1', brand: 'brand1', color: 'color1' },
            {vin: 'vin2', year: 'year2', brand: 'brand2', color: 'color2' }

        ];
     }
}
