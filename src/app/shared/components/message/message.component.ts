import { Component, Input } from '@angular/core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  errIcon = faTriangleExclamation
}
