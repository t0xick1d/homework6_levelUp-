import { Component, Input, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  @Input() action!: any;
  constructor() {}

  ngOnInit(): void {}
  onClickEdit() {
    console.log('Редагування в розробці');
  }
  onClickDelete() {
    console.log('Видалення в розробці');
  }
}
