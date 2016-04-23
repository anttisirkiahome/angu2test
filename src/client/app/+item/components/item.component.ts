import {Component, Input, OnInit} from 'angular2/core';

@Component({
  selector: 'huuto-item',
  templateUrl: 'app/+item/components/item.component.html' /*,
  styleUrls: ['app/+about/components/about.component.css']*/
})

export class ItemComponent implements OnInit {
  @Input() item: any;
  constructor() {
    console.log('constructing itemComponent');
  }

  ngOnInit() {
    console.log('ngOnInit item, ' , this.item);
  }
}
