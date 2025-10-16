"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PusherPublisher = void 0;
class PusherPublisher {
    pusher;
    constructor(pusher) {
        this.pusher = pusher;
    }
    async publish(channel, event, payload) {
        await this.pusher.trigger(channel, event, payload);
    }
}
exports.PusherPublisher = PusherPublisher;
//# sourceMappingURL=pusher-publisher.js.map