import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  @Input() action!: string;
  constructor() {}

  ngOnInit(): void {}
}
