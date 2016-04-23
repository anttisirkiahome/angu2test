import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {HuutoService} from '../../shared/index';
import {ItemComponent} from '../../+item/index';

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+home/components/home.component.html',
  styleUrls: ['app/+home/components/home.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ItemComponent],
  providers: [HuutoService, HTTP_PROVIDERS]
})
export class HomeComponent {
  //newName: string;
  private items: any;
  private state: boolean;

  getItems() {
    return this.huutoService.getItems()
      .subscribe((res: any) => {
        console.log('reponse', res);
        this.items = res;
        this.state = true;
      });
  }

  constructor(private huutoService: HuutoService) {
    console.log('HomeComponent constructor');
    this.items = [];
    this.state = false;
    this.getItems();
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  /*addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  } */
}
