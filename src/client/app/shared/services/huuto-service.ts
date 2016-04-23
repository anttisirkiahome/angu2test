import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class HuutoService {
  constructor(private http: Http) {}
  getItems() {
    return this.http.get('http://api.huuto.net/1.1/items').map(response => response.json());
  }
}
