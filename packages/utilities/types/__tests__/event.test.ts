/** Dependencies */
import { EventBus } from '../src';

/** Define a utility tests event list */
type TestEventList = {
  eventA: string;
  eventB: number;
};

/** Prepare the test for the EventBus class */
describe('EventBus', () => {
  /** Prepare a bus */
  let bus: EventBus<TestEventList>;

  /** Create a new bus before each tests */
  beforeEach(() => {
    bus = new EventBus<TestEventList>();
  });

  it('should register an event listener with on()', () => {
    const callback = jest.fn();
    bus.on('eventA', callback);

    // Emit the event
    bus['emit']('eventA', 'Hello World');

    expect(callback).toHaveBeenCalledWith('Hello World');
  });

  it('should register a one-time event listener with once()', () => {
    const callback = jest.fn();
    bus.once('eventA', callback);

    // Emit the event twice
    bus['emit']('eventA', 'First Call');
    bus['emit']('eventA', 'Second Call');

    expect(callback).toHaveBeenCalledWith('First Call');
    expect(callback).toHaveBeenCalledTimes(1); // Should only be called once
  });

  it('should remove an event listener with off()', () => {
    const callback = jest.fn();
    bus.on('eventA', callback);

    bus.off('eventA', callback);

    // Emit the event
    bus['emit']('eventA', 'Hello World');

    expect(callback).not.toHaveBeenCalled();
  });

  it('should remove all listeners for an event with off() when no callback is provided', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    bus.on('eventA', callback1);
    bus.on('eventA', callback2);

    bus.off('eventA');

    // Emit the event
    bus['emit']('eventA', 'Hello World');

    expect(callback1).not.toHaveBeenCalled();
    expect(callback2).not.toHaveBeenCalled();
  });

  it('should only call the specified callback when multiple callbacks are registered', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    bus.on('eventA', callback1);
    bus.on('eventA', callback2);

    bus['emit']('eventA', 'Hello World');

    expect(callback1).toHaveBeenCalledWith('Hello World');
    expect(callback2).toHaveBeenCalledWith('Hello World');
  });

  it('should not call removed callbacks', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    bus.on('eventA', callback1);
    bus.on('eventA', callback2);

    bus.off('eventA', callback1);
    bus['emit']('eventA', 'Hello World');

    expect(callback1).not.toHaveBeenCalled();
    expect(callback2).toHaveBeenCalledWith('Hello World');
  });
});
