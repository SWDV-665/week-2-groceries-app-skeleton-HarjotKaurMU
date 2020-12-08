import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})



export class Tab1PageModule {
   static  groceryList  = [
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
    }]
}
  
