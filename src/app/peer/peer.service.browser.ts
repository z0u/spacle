import { Injectable } from '@angular/core';
import { Peer } from 'peerjs';
import ShortUniqueId from 'short-unique-id';
import { PeerService } from './peer.service';

@Injectable()
export class PeerServiceBrowser extends PeerService {
  readonly uid = new ShortUniqueId({ length: 10 });

  override createPeer() {
    const id = this.uid.rnd();
    return new Peer(`spacle-${id}`);
  }
}

export const PeerServiceBrowserProvider = {
  provide: PeerService,
  useClass: PeerServiceBrowser,
};
