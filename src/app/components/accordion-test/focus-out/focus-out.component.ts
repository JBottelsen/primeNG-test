import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Accordion } from 'primeng/accordion';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-focus-out',
  templateUrl: './focus-out.component.html',
  styleUrls: ['./focus-out.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class FocusOutComponent implements OnInit {

  testForm!: FormGroup;

  messages!: Message[];
  
  @ViewChild('accordionTab') accordionTab!: Accordion

  constructor(private confirmation: ConfirmationService, private messageService: MessageService) { 
  }

  ngOnInit(): void {
    this.testForm = new FormGroup({
      field1: new FormControl()
    })
  }

  onSubmit(formData: FormGroup) {
    console.log(formData.dirty)
    this.testForm.reset();
  }

  openAccordion() {
    for(let tab of this.accordionTab.tabs) {
      tab.selected = true;
    }
  }

  accordionClose() {
    if(!this.testForm.pristine) {
      this.openAccordion()
      this.openUnsavedChangesDialog()
    }
  }

  openUnsavedChangesDialog() {
    this.confirmation.confirm({
      message: "You have Unsaved Changes here, Do you want to leave without saving them",
      header: "Proceed?",
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messages = [{severity: 'warn', summary: 'Deleted!', detail:'Your Changes are gone'}]
        this.testForm.reset()
      },
      reject: () => {
        this.messages = [{severity: 'success', summary: 'Not Deleted!', detail: 'Continue Editing'}]
      }
    });
  }

  clearMessage() {
    this.messageService.clear();
  }

  onClickOutside(event: Event) {
    if(!this.testForm.pristine) {
      this.openUnsavedChangesDialog();
    }
  }
}