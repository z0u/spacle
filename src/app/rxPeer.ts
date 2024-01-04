import { DataConnection, Peer, PeerError } from 'peerjs';
import { ReplaySubject, Subject } from 'rxjs';

export class RxPeer {
  constructor(private readonly peer: Peer) {
    peer.on('open', (id) => this.open$.next(id));
    peer.on('connection', (conn) => this.connection$.next(conn));
    peer.on('close', () => this.close$.next());
    peer.on('disconnected', () => this.disconnected$.next());
    peer.on('error', (err) => this.error$.next(err));
  }
  readonly id = this.peer.id;
  readonly open$ = new ReplaySubject<string>();
  readonly connection$ = new Subject<DataConnection>();
  readonly close$ = new Subject<void>();
  readonly disconnected$ = new Subject<void>();
  readonly error$ = new Subject<PeerError<string>>();

  connect(id: string) {
    this.peer.connect(id);
  }
}
