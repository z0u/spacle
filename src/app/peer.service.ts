import { Injectable } from '@angular/core';
import { isBrowser } from 'browser-or-node';
import { Peer } from 'peerjs';
import {
  ReplaySubject,
  Subject,
  finalize,
  map,
  pairwise,
  startWith,
  tap,
} from 'rxjs';
import { v4 as uuid } from 'uuid';
import finalizeEach from './operators/finalizeEach';
import { RxPeer } from './rxPeer';

type PeerJS = typeof import('peerjs/dist/types');

@Injectable({ providedIn: 'root' })
export class PeerService {
  readonly peerjs$ = new ReplaySubject<PeerJS>(1);
  constructor() {
    if (isBrowser) {
      // PeerJS uses features only available in browsers, so it needs to be
      // loaded only if the app is running in a browser (and not during SSR).
      import('peerjs').then((mod) => {
        this.peerjs$.next(mod);
      });
    }
  }

  createPeer$() {
    return this.peerjs$.pipe(
      map((pjs) => new pjs.Peer(uuid())),
      finalizeEach((p) => p.destroy()),
      map((p) => new RxPeer(p))
    );
  }
}
