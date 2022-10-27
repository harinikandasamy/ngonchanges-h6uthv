import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-my-prop-bind',
  templateUrl: './my-prop-bind.component.html',
  styleUrls: ['./my-prop-bind.component.css'],
})
export class MyPropBindComponent implements OnInit, OnChanges {
  @Input() myValProp: string;

  propChanges: any;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.propChanges = changes;
    console.log(this.propChanges);
  }
}
