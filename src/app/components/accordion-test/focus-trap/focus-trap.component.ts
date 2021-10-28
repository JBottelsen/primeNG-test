import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-focus-trap',
  templateUrl: './focus-trap.component.html',
  styleUrls: ['./focus-trap.component.scss'],
  providers: [MessageService]
})
export class FocusTrapComponent implements OnInit {

  experienceForm!: FormGroup;

  isFocusTrapEnabled: boolean = false;

  current: boolean = true;

  constructor(private message: MessageService) { }

  ngOnInit(): void {
    this.experienceForm = new FormGroup({
      title: new FormControl(),
      company: new FormControl(),
      location: new FormControl(),
      current: new FormControl('this.current'),
      startDate: new FormControl(),
      endDate: new FormControl(),
      experienceDescription1: new FormControl(),
      experienceDescription2: new FormControl(),
      experienceDescription3: new FormControl()
    })
  }

  formOnSubmit(formData: FormGroup) {
    if(formData.dirty) {
      console.log(formData);
      this.message.add({key: 'submitted', severity: 'success', summary: 'Success!',
      detail: 'Successfully Submitted the Form'}) 
      this.experienceForm.reset();  
    }
  }

  onAccordionOpen() {
   this.isFocusTrapEnabled = true;
  }

  onAccordionClose() {
    this.isFocusTrapEnabled = false;
  }

}
