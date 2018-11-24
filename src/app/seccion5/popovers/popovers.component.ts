import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: "app-popovers",
  templateUrl: "./popovers.component.html",
  styleUrls: ["./popovers.component.css"]
})
export class PopoversComponent implements OnInit {
  @ViewChild("myButton") popOverButton: ElementRef;

  constructor() {}

  ngOnInit() {

  }
}
