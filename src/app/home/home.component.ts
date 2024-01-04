import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PeerService } from '../peer.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit {
  constructor(readonly peerService: PeerService) {}
  readonly me$ = this.peerService.createPeer$();

  ngOnInit() {
    
  }

  connectToPeer() {

  }
}
