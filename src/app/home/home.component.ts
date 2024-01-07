import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import Peer from 'peerjs';
import { PeerService } from '../peer.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(@Optional() readonly peerService?: PeerService) {}
  me: Peer | null = null;

  ngOnInit() {
    this.me = this.peerService?.createPeer() ?? null;
  }

  ngOnDestroy() {
    this.me?.destroy();
  }

  connectToPeer() {
    throw new Error('Method not implemented.');
  }
}
