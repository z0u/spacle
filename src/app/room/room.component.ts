import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, Optional } from '@angular/core';
import Peer from 'peerjs';
import { PeerService } from '../peer/peer.service';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.sass',
})
export class RoomComponent implements OnInit, OnDestroy {  
  constructor(@Optional() readonly peerService?: PeerService) {}
  me: Peer | null = null;
  roomId?: string;

  @Input()
  set id(roomId: string) {
    this.roomId = roomId;
  }

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
