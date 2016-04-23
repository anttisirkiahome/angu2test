import {Component, Input, OnInit} from 'angular2/core';

@Component({
  selector: 'huuto-item',
  //encapsulation: ViewEncapsulation.Native,
  templateUrl: 'app/+item/components/item.component.html',
  styleUrls: ['app/+item/components/item.component.css']
})

export class ItemComponent implements OnInit {
  @Input() item: any;
  imageUrl: string;
  constructor() {
    console.log('constructing itemComponent');
  }

  ngOnInit() {
    console.log('ngOnInit item, ' , this.item);

    this.imageUrl = this.item.images.length > 0 ?
      this.item.images[0].links.thumbnail : '';
  }
}
