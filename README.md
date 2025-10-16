## 📡 @schorts/pusher-publisher

A minimal, type-safe wrapper for dispatching real-time events via Pusher Channels, designed to integrate seamlessly with the Publisher interface from `@schorts/shared-kernel`. This abstraction enables clean separation of concerns between event publishing and transport logic, making it easy to swap or extend real-time infrastructure.

## 🚀 Installation

```bash
npm install @schorts/pusher-publisher
```

## 🧱 Usage

### 1. Instantiate with a configured Pusher client

import { Pusher, PusherPublisher } from '@schorts/pusher-publisher';

```ts
const pusher = new Pusher({
  appId: 'your-app-id',
  key: 'your-key',
  secret: 'your-secret',
  cluster: 'your-cluster',
  useTLS: true,
});

const publisher = new PusherPublisher(pusher);
```

### 2. Publish an event

```ts
await publisher.publish('private-WAITER_KITCHEN_abc123', 'order_ready', {
  orderId: 'xyz789',
  status: 'ready',
});
```

## 🧩 Interface

This class implements the Publisher interface from `@schorts/shared-kernel`:

## 🧠 Why Use This

- ✅ Type-safe and framework-agnostic
- ✅ Clean separation of publishing logic from transport
- ✅ Easy to swap for other transports (e.g. Socket.IO, Ably)
- ✅ Ideal for use in NestJS, Express, or serverless environments

## 📜 License

LGPL
