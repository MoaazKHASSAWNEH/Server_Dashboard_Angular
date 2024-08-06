import { Component, ElementRef, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { SupportTicket } from '../support-ticket/support-ticket.model';

@Component({
  selector: 'app-new-support-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-support-ticket.component.html',
  styleUrl: './new-support-ticket.component.css'
})
export class NewSupportTicketComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<SupportTicket>();


  onSubmit(titleInput: string, textInput: string) {
    this.add.emit({
      id: (new Date()).getTime().toString(),
      title: titleInput,
      request: textInput,
      status: "open"
    });

    this.form().nativeElement.reset();
  }
}
