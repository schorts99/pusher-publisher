import { expectTypeOf } from "expect-type"; 
import Pusher from "pusher";

import { PusherPublisher } from "../src";

describe("PusherPublisher", () => {
  describe('#pusher', () => {
    it('has a private property of type Pusher', () => {
      expectTypeOf<PusherPublisher["pusher"]>().toEqualTypeOf<Pusher>();
    });
  });

  describe('#publish', () => {
    it('receives a channel string, an event string and a payload object or string', () => {
      expectTypeOf<PusherPublisher["publish"]>().parameters.toEqualTypeOf<[string, string, Record<string, any> | string]>();
    });

    it('returns a void Promise', () => {
      expectTypeOf<PusherPublisher['publish']>().returns.toEqualTypeOf<Promise<void>>();
    });
  });
});
