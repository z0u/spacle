import { Injectable } from '@angular/core';
import { Peer } from 'peerjs';

@Injectable()
export abstract class PeerService {
  abstract createPeer(): Peer;
}
