import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[board-dnd-list], board-dnd-list',
  templateUrl: './board-dnd-list.component.html',
  styleUrls: ['./board-dnd-list.component.css'],
})
export class BoardDndListComponent {
  @Input() name: string;
}
