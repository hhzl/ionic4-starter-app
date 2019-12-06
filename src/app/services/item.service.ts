import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  db = {"items": [
    {
      'id': "1",
      'title': "Example 1",
      'description': 'description 1'
    },
    {
      'id': "2",
      'title': "Example 2",
      'description': 'description 2'
    },
    {
      'id': "3",
      'title': "Example 3",
      'description': 'description 3'
    },
    {
      'id': "4",
      'title': "Example 4",
      'description': 'description 4'
    }
  ]
  };

  storageKey = 'theToDoList';

  constructor() { this.initialize()}



  initialize() { 

  if (!localStorage.getItem(this.storageKey)) {
       localStorage.setItem(this.storageKey,JSON.stringify(this.db));
     } else
     { this.db = JSON.parse(localStorage.getItem(this.storageKey));}
  }


  createItem(title, description){

    let randomId = Math.random().toString(36).substr(2, 5);

    this.db.items.push({
      'id': randomId,
      'title': title,
      'description': description
    });
  }

  getItems(){
    return this.db.items;
  }

  getItemById(id){
    return this.db.items.filter(item => item.id === id);
  }


  updateItem(newValues){
    let itemIndex = this.db.items.findIndex(item => item.id == newValues.id);
    this.db.items[itemIndex] = newValues;   
    localStorage.setItem(this.storageKey,JSON.stringify(this.db));
  }
}
