import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

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

    removeItem(index){
      this.groceryList.splice(index, 1);
    }

    addItem(item){
      this.groceryList.push(item);
    }

    editItem(item, index){
      this.groceryList[index] = item;
    }
}
