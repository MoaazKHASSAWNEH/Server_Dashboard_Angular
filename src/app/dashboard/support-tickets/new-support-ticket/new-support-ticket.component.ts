import { Component, ElementRef, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-support-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-support-ticket.component.html',
  styleUrl: './new-support-ticket.component.css'
})
export class NewSupportTicketComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(titleInput: string, textInput: string) {
    console.log(titleInput, textInput);

    this.form().nativeElement.reset();
  }
}
