import { Component, OnInit, ViewChild } from '@angular/core';
import { Accordion } from 'primeng/accordion';

@Component({
  selector: 'app-focus-trap',
  templateUrl: './focus-trap.component.html',
  styleUrls: ['./focus-trap.component.scss']
})
export class FocusTrapComponent implements OnInit {

  isFocusTrapDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAccordionOpen() {
   this.isFocusTrapDisabled = true;
  }

  onAccordionClose() {
    this.isFocusTrapDisabled = false;
  }
}
