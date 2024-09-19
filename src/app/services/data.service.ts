import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { initialDogs } from '../data/initialData/initialDogs';
import { DatabaseService } from './database.service';
import { Dogs } from '../interfaces/Dogs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dogs: BehaviorSubject<Dogs> = new BehaviorSubject<Dogs>(JSON.parse(JSON.stringify(initialDogs)));
  dogs$ = this.dogs.asObservable();

  constructor(private db: DatabaseService) {}

  getDogs() {
    let dogs = this.dogs.value;
    dogs.isLoading = true;

    this.db.getDogs().pipe(take(1)).subscribe({
      next: (data: any) => {
        dogs.numberLoaded++;
        dogs.src = data.message;
        dogs.isLoading = false;
        dogs.hasFetched = true;
        this.dogs.next(dogs);
      },
      error: (err) => {
        dogs.isLoading = false;
        this.dogs.next(dogs);
      }
    });
  }
}
