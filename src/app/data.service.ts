import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {  throwError, Subject } from 'rxjs';
import {map, catchError, retry} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items:any = [];
  dataChanged$: Observable<boolean>;
  private dataChangedSubject: Subject<boolean>;
  baseURL = "http://localhost:8080";

  constructor(public http:HttpClient) {
    console.log('Groceries data service')

    this.dataChangedSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangedSubject.asObservable();
   }

   getItems(): Observable<object>{
     return this.http.get(this.baseURL + '/api/groceries').pipe(
       map(this.extractData),
       catchError(this.handleError)
     );
   }

   private extractData(res:Response){
     console.log(res);
     let body = res;
     return body || {};
   }

   private handleError(error: Response | any){
    let errMsg : string;
    if(error instanceof Response){
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
       return Observable.throw(errMsg);
   }



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

    // removeItem(index){
    //   this.groceryList.splice(index, 1);
    // }

    // addItem(item){
    //   this.groceryList.push(item);
    // }

    // editItem(item, index){
    //   this.groceryList[index] = item;
    // }

    /*Removing item from array*/
  removeItem(_id) {
    console.log('In delete methid', _id)
    this.http.delete(this.baseURL + '/api/groceries/' + _id).subscribe(res => {
      this.items = res;
      this.dataChangedSubject.next(true);
    });
  }

  /*Adding item to array*/
  addItem(item) {
    this.http.post(this.baseURL + '/api/groceries', item).subscribe(res => {
      this.items = res;
      this.dataChangedSubject.next(true);
    });
  }

  /*Saving item to array with new information*/
  editItem(item, index) {
    console.log('In edit methid', item, index)
    this.http.put(this.baseURL + '/api/groceries/' + index, item).subscribe(res => {
      this.items = res;
      this.dataChangedSubject.next(true);
    });
  }


}
