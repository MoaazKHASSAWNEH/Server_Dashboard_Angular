import { Component } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";
import { NewSupportTicketComponent } from "./new-support-ticket/new-support-ticket.component";

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [DashboardItemComponent, NewSupportTicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
  image = {
    src: 'list.png',
    alt: 'A list of items'
  };

  title = 'Support Tickets'
}
