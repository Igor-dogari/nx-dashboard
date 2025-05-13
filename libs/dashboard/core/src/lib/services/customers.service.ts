import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostInterface } from '@core';
import { map } from 'rxjs/operators';
// import { customers } from './data';
import * as mockData from 'public/assets/mockdata/content-post-list.json';

// export interface LoadResponse {
//   content: CustomerInterface[];
//   total: number;
//   page: number;
// }

@Injectable({ providedIn: 'root' })
export class CustomersService {
  // #baseUrl = '/customers';
  // #http = inject(HttpClient);

  public load(page: number): Observable<PostInterface[]> {
    // load(page: number): Observable<LoadResponse> {

    // return of({ total: Math.ceil(customers.length / 5), page, content: customers });

    return of(JSON.parse(JSON.stringify(mockData)).default).pipe(
      map((data: PostInterface[]) => {
        return data.length > 0 ? data : [];
      }),
    );

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
