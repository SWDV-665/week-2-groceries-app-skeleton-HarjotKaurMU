import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(public dataService:DataService) { }

  addItemAlert() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'New item';
    alert.inputs = [
      {
        name: 'name',
        id:'name-id',
        placeholder: 'Item name'
      },
      {
        name: 'quantity',
        id: 'quantity-id',
        type: 'number',
        min: 0,
        placeholder: 'Item quantity'
      }
 
    ];
    alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm add Cancel')
        }
      }, {
        text: 'Ok',
        handler: (item) => {
          console.log('Confirm add Ok')
          // this.addItem(item.name, item.quantity)
          this.dataService.addItem(item) 
        }
      }
    ];
  
    document.body.appendChild(alert);
    return alert.present();
  }

  editItemAlert(item, index) {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'New item';
    alert.inputs = [
      {
        name: 'name',
        placeholder: 'Item name',
        value: item.name
      },
      {
        name: 'quantity',
        id: 'quantity-id',
        type: 'number',
        min: 0,
        placeholder: 'Item quantity'
      }
 
    ];
    alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm edit Cancel')
        }
      }, {
        text: 'Ok',
        handler: (item) => {
          console.log('Confirm edit Ok')
          // this.addItem(item.name, item.quantity)
          // this.groceryList[index] = item;
          this.dataService.editItem(item, index)
        }
      }
    ];
  
    document.body.appendChild(alert);
    return alert.present();
  }
}
