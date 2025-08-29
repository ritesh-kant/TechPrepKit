## Problem Statement

You need to implement an **asynchronous queue** (`AsyncQueue`) that processes items at a fixed time interval.  
The queue must be event-driven and support the following features:

### Requirements

1. **Enqueue Items**
   - Add items to the queue for later processing.
   - Emit an `'enqueued'` event when an item is added.

2. **Start Processing**
   - Begin processing items at the configured interval.
   - Emit a `'dequeued'` event when an item is removed.

3. **Pause Processing**
   - Stop dequeuing items without removing them from the queue.
   - Items should remain in the queue until resumed.

4. **Resume Processing**
   - Resume dequeuing items after a pause using `start()`.

5. **Update Interval**
   - Dynamically change the processing interval by emitting an `'interval'` event.
   - Continue processing without losing items or breaking timing.

6. **Event-Driven Design**
   - `'enqueued'` → Triggered when an item is added.
   - `'dequeued'` → Triggered when an item is removed.

### Test Expectations

The tests will verify:
- No items are dequeued while paused.
- Processing resumes correctly after pause.
- Interval updates take effect mid-run.
- The queue continues to listen for new data while paused.

**In short**: Build an event-driven timer-based queue that can **pause, resume, and change speed** without losing data.