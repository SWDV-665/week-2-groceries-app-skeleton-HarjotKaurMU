import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { InputDialogServiceService } from '../input-dialog-service.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  items = [];
  errorMessage: string;
  title = '';
  
 
  constructor(public dataService:DataService, public inputDialogService: InputDialogServiceService, public socialSharing: SocialSharing) {
    // groceryList = this.dataService.groceryList;
      this.title = this.dataService.title;
      console.log(this.title, 'TITLE')
      dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadItems();
    });
    }

    // ionViewDidLoad(){
    //   this.loadItems();
    // }

    ionViewWillEnter() {
      this.loadItems();
    }

    loadItems(){
      this.dataService.getItems()
        .subscribe(
          items => this.items = <any>items,
          error => this.errorMessage = <any>error);
         
    }


    deleteItem(deletedItem, _id){
      console.log("Removing item", deletedItem.name)
      // var filtered = this.groceryList.filter(function(el) { return el.name != deletedItem.name; });
      // this.groceryList = filtered;
      // this.groceryList.splice(index, 1);
      this.dataService.removeItem(_id)
    }

    addItem() {
      console.log('Adding new item.');
      this.inputDialogService.addItemAlert();
    }

    editItem(item, index){
      // this.groceryList.push({name: itemName, quantity: itemQuantity})
      this.inputDialogService.editItemAlert(item, index)
    }

    shareItem(item){
      let message = "Grocery: Item name - " + item.name + " Item quantity - " + item.quantity;
      let subject = "Shared via Groceries app";
      this.socialSharing.share(message, subject).then(() => {
        console.log("Shared successfully")
        // Sharing via email is possible
      }).catch((error) => {
        // Sharing via email is not possible
        console.error("Error whiel sharing" + error);
      });
      
      // Share via email
      // this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
      //   // Success!
      // }).catch(() => {
      //   // Error!
      // });
    }
    
    
    // addItemAlert() {
    //   const alert = document.createElement('ion-alert');
    //   alert.cssClass = 'my-custom-class';
    //   alert.header = 'New item';
    //   alert.inputs = [
    //     {
    //       name: 'name',
    //       id:'name-id',
    //       placeholder: 'Item name'
    //     },
    //     {
    //       name: 'quantity',
    //       id: 'quantity-id',
    //       type: 'number',
    //       min: 0,
    //       placeholder: 'Item quantity'
    //     }
   
    //   ];
    //   alert.buttons = [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       cssClass: 'secondary',
    //       handler: () => {
    //         console.log('Confirm add Cancel')
    //       }
    //     }, {
    //       text: 'Ok',
    //       handler: (item) => {
    //         console.log('Confirm add Ok')
    //         // this.addItem(item.name, item.quantity)
    //         this.dataService.addItem(item);
    //       }
    //     }
    //   ];
    
    //   document.body.appendChild(alert);
    //   return alert.present();
    // }

    // editItemAlert(item, index) {
    //   const alert = document.createElement('ion-alert');
    //   alert.cssClass = 'my-custom-class';
    //   alert.header = 'New item';
    //   alert.inputs = [
    //     {
    //       name: 'name',
    //       placeholder: 'Item name',
    //       value: item.name
    //     },
    //     {
    //       name: 'quantity',
    //       id: 'quantity-id',
    //       type: 'number',
    //       min: 0,
    //       placeholder: 'Item quantity'
    //     }
   
    //   ];
    //   alert.buttons = [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       cssClass: 'secondary',
    //       handler: () => {
    //         console.log('Confirm edit Cancel')
    //       }
    //     }, {
    //       text: 'Ok',
    //       handler: (item) => {
    //         console.log('Confirm edit Ok')
    //         // this.addItem(item.name, item.quantity)
    //         this.groceryList[index] = item;
    //       }
    //     }
    //   ];
    
    //   document.body.appendChild(alert);
    //   return alert.present();
    // }

}
