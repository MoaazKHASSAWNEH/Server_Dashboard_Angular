import { Component } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";
import { NewSupportTicketComponent } from "./new-support-ticket/new-support-ticket.component";
import { SupportTicket } from './support-ticket/support-ticket.model';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [DashboardItemComponent, NewSupportTicketComponent, SupportTicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
  image = {
    src: 'list.png',
    alt: 'A list of items'
  };

  title = 'Support Tickets'

  tickets: SupportTicket[] = [];

  onAdd(data: SupportTicket) {
    this.tickets.unshift(data);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map(ticket => {
      if (ticket.id === id) {
        return {...ticket, status: 'closed'};
      }
      return ticket;
    });
  }

}