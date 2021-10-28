import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside'

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { FocusTrapModule } from 'primeng/focustrap';
import { ToastModule } from 'primeng/toast'

import { AppComponent } from './app.component';
import { FocusOutComponent } from './components/accordion-test/focus-out/focus-out.component';
import { FocusTrapComponent } from './components/accordion-test/focus-trap/focus-trap.component';

@NgModule({
  declarations: [
    AppComponent,
    FocusOutComponent,
    FocusTrapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule,

    // PrimeNG
    AccordionModule,
    ButtonModule,
    CardModule,
    MultiSelectModule,
    OverlayPanelModule,
    SelectButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    MessagesModule,
    InputTextareaModule,
    CheckboxModule,
    CalendarModule,
    FocusTrapModule,
    ToastModule

  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
