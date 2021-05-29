import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  @Input()
  public heading: string;

  constructor() { }

  ngOnInit(): void {
  }

}
