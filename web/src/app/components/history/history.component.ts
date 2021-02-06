import { Component, Input, OnInit } from '@angular/core';
import { DataHistory } from 'src/app/models/ohm.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  @Input() history: DataHistory[];

  constructor() { }

  ngOnInit(): void {
  }

}
