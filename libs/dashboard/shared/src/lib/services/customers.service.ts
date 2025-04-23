import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { lastValueFrom, map, Observable, of } from 'rxjs';
import { CustomerInterface } from '../state/customers/with-paged-entities';
// import { customers } from './data';

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  avatarUrl: string;
}

interface Post {
  id: string;
  title: string;
  author: User;
  status: string;
  createdAt: Date;
  publishedAt?: Date;
}

export interface LoadResponse {
  content: CustomerInterface[];
  total: number;
  page: number;
}

@Injectable({ providedIn: 'root' })
export class CustomersService {
  // #baseUrl = '/customers';
  #http = inject(HttpClient);
  // #customerStore = inject(CustomersStore);

  load(page: number): Observable<Post[]> {
    // load(page: number): Observable<LoadResponse> {
    // const customers1 = this.#customerStore.customerEntities();


    // return of({ total: Math.ceil(customers.length / 5), page, content: customers });

    return this.#http
      .get<Post[]>('/assets/mockdata/content-post-list.json')
      // .subscribe(data => {
      // this.data = data;
      // })
      ;

    // return this.#http
    //   .get<{ content: Customer[]; total: number }>(this.#baseUrl, {
    //     params: new HttpParams().set('page', page),
    //   })
    //   .pipe(map((store) => ({ ...store, page, content: asd })));
  }

  loadAsPromise(page: number) {
    return lastValueFrom(this.load(page));
  }
}
