import Pusher from 'pusher';
import { Publisher } from "@schorts/shared-kernel";

export class PusherPublisher implements Publisher {
  constructor(
    private readonly pusher: Pusher,
  ) {}

  async publish(channel: string, event: string, payload: any): Promise<void> {
    await this.pusher.trigger(channel, event, payload);
  }
}
