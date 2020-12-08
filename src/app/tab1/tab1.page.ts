import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

 
  constructor() {}
    title = "Grocery List "
    groceryList  = [
    {
      "name": "Milk",
      "quantity" : "2" 
    },
    {
      "name": "Onions",
      "quantity" : "4" 
    },
    {
      "name": "Ketchup",
      "quantity" : "1" 
    },
    {
      "name": "Rice",
      "quantity" : "3" 
    },
    {
      "name": "Cereal",
      "quantity" : "4" 
    }];

    deleteItem(deletedItem){
      console.log("Removing item", deletedItem.name)
      var filtered = this.groceryList.filter(function(el) { return el.name != deletedItem.name; });
      this.groceryList = filtered;
    }

    addItem(itemName, itemQuantity){
      this.groceryList.push({name: itemName, quantity: itemQuantity})
    }
    
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
            console.log('Confirm Cancel')
          }
        }, {
          text: 'Ok',
          handler: (item) => {
            console.log('Confirm Ok')
            this.addItem(item.name, item.quantity)
          }
        }
      ];
    
      document.body.appendChild(alert);
      return alert.present();
    }

}
