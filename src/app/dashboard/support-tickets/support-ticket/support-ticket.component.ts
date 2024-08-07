import { Component, input, output, signal } from '@angular/core';
import { SupportTicket } from './support-ticket.model';

@Component({
  selector: 'app-support-ticket',
  standalone: true,
  imports: [],
  templateUrl: './support-ticket.component.html',
  styleUrl: './support-ticket.component.css'
})
export class SupportTicketComponent {
  data = input.required<SupportTicket>();
  dataVisible = signal(false);
  close = output();

  onToggleData() {
    // this.dataVisible.set(!this.dataVisible());
    this.dataVisible.update(wasVisible => !wasVisible);
  }

  onMarkAsClosed() {
    this.close.emit();
  }
}
