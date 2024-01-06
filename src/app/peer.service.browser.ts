import { Injectable } from '@angular/core';
import { Peer } from 'peerjs';
import { PeerService } from './peer.service';

@Injectable()
export class PeerServiceBrowser extends PeerService {
  override createPeer(id: string): Peer | null {
    return new Peer(id);
  }
}

export const PeerServiceBrowserProvider = { provide: PeerService, useClass: PeerServiceBrowser };
