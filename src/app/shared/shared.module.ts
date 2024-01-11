import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { TextDangerComponent } from './components/text-danger/text-danger.component';
import { MessageComponent } from './components/message/message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    TextDangerComponent,
    MessageComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    InputComponent,
    ButtonComponent,
    TextDangerComponent,
    MessageComponent,
  ],
})
export class SharedModule {}
