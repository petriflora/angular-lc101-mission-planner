import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   disableButton: boolean = false
   nearMaxMassWarning: boolean = false

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   
   addItem(equipmentObject) {
    let item = equipmentObject;
    this.cargoHold.push(item);
    this.cargoMass += item.mass;
    return (this.cargoMass >= (this.maximumAllowedMass - 200));
   } 

   cargoHoldFull(equipmentObject) {
    let item = equipmentObject;  
    if (this.cargoMass + item.mass > this.maximumAllowedMass) {
      this.disableButton = true;
      return true
      }
      else if (this.cargoHold.length === this.maxItems) {
        this.disableButton = true;
        return true
      }
      else if (this.cargoMass >= this.maximumAllowedMass - 200) {
        this.nearMaxMassWarning = true
      }
   }

    emptyHold() {
      this.cargoMass = 0;
      this.cargoHold = [];
    }

}
