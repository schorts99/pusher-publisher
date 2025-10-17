import Pusher from "pusher";
import { Publisher } from "@schorts/shared-kernel";
export declare class PusherPublisher implements Publisher {
    private readonly pusher;
    constructor(pusher: Pusher);
    publish(channel: string, event: string, payload: Record<string, any> | string): Promise<void>;
}
//# sourceMappingURL=pusher-publisher.d.ts.map