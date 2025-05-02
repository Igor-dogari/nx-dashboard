import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostInterface } from '@core';
import { map } from 'rxjs/operators';
// import { customers } from './data';

// export interface LoadResponse {
//   content: CustomerInterface[];
//   total: number;
//   page: number;
// }

@Injectable({ providedIn: 'root' })
export class CustomersService {
  // #baseUrl = '/customers';
  #http = inject(HttpClient);

  public load(page: number): Observable<PostInterface[]> {
    // load(page: number): Observable<LoadResponse> {

    // return of({ total: Math.ceil(customers.length / 5), page, content: customers });

    return this.#http
      .get<PostInterface[]>('public/assets/mockdata/content-post-list.json')
      .pipe(map((data) => data.length > 0 ? data : []));
    // .subscribe(data => {
    // this.data = data;
    // })

    // return this.#http
    //   .get<{ content: Customer[]; total: number }>(this.#baseUrl, {
    //     params: new HttpParams().set('page', page),
    //   })
    //   .pipe(map((store) => ({ ...store, page, content: asd })));
  }

  // loadAsPromise(page: number) {
  //   return lastValueFrom(this.load(page));
  // }
}
