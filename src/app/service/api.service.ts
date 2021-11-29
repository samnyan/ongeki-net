import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly API_ENDPOINT: string = environment.apiServer;

  constructor(
    private http: HttpClient
  ) {
  }

  public get<T>(url: string, options?: object) {
    return this.http.get<T>(this.API_ENDPOINT + url, options);
  }

  public post<T>(url: string, data: any, options?: object) {
    return this.http.post<T>(this.API_ENDPOINT + url, data, options);
  }

  public put<T>(url: string, data: any, options?: object) {
    return this.http.put<T>(this.API_ENDPOINT + url, data, options);
  }

  public delete(url: string, options?: object) {
    return this.http.delete(this.API_ENDPOINT + url, options);
  }
}
