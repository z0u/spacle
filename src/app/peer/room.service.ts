import ShortUniqueId from "short-unique-id";

export class RoomService {
  readonly uid = new ShortUniqueId({ length: 10 });

  create() {
    this.enter(this.uid.rnd());
  }

  enter(id: string) {

  }
}
