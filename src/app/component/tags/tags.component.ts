import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  @Input() category!: string;
  public tagsArray: string[] = [];
  constructor() {
    this.tagsArray = [this.category];
  }

  ngOnInit(): void {}
}
