import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  image = {
    src: 'status.png',
    alt: 'A signal symbol'
  };
  title = 'Server status';
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const interval = setInterval(() => {
      const random = Math.random();
      if (random < .5) {
        this.currentStatus = 'online';
      } else if (random < .9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
