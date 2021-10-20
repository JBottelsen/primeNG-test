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
import { Messages, MessagesModule } from 'primeng/messages';

import { HttpService } from './services/http.service';
import { AppComponent } from './app.component';

import { AsyncDropdownComponent } from './components/async-dropdown/async-dropdown.component';
import { ToggleFormComponent } from './components/toggle-form/toggle-form.component';
import { SharePanelComponent } from './components/share-panel/share-panel.component';
import { FocusOutComponent } from './components/accordion-test/focus-out/focus-out.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncDropdownComponent,
    ToggleFormComponent,
    SharePanelComponent,
    FocusOutComponent,
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
    MessagesModule
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
