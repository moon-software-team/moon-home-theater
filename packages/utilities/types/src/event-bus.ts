/** Type for the callback of the event bus */
export type EventBusCallback<T = unknown> = (data?: T) => void;

/** Type of event bus handlers */
export type EventBusHandler<EventList> = {
  /** The name of the event */
  event: keyof EventList;
  /** The callback function for the event */
  callback: EventBusCallback<EventList[keyof EventList]>;
  /** Is the event only executed once */
  once: boolean;
};

/** Simple event bus class to add events to a class */
export class EventBus<EventList extends Record<string, unknown>> {
  /** The list of handlers */
  private handlers: EventBusHandler<EventList>[] = [];

  /**
   * Add an event listenner for a specific event in EventList
   * @param event The event to listen to
   * @param callback The function to call when the event is triggered
   */
  public on<T extends keyof EventList>(event: T, callback: EventBusCallback<EventList[T]>): void {
    this.handlers.push({ event, callback: callback as EventBusCallback, once: false });
  }

  /**
   * Add an event listenner for a specific event once in EventList
   * @param event The event to listen to once
   * @param callback The function to call once when the event is triggered
   */
  public once<T extends keyof EventList>(event: T, callback: EventBusCallback<EventList[T]>): void {
    this.handlers.push({ event, callback: callback as EventBusCallback, once: true });
  }

  /**
   * Private function to trigger an event in the class
   * @param event The event to emit
   * @param data The data to send in the trigger
   */
  protected emit<T extends keyof EventList>(event: T, data?: EventList[T]): void {
    this.handlers
      .filter((handler) => handler.event === event)
      .forEach((handler) => handler.callback(data));
    this.handlers = this.handlers.filter((handler) => handler.event !== event || !handler.once);
  }

  /**
   * Returns a specific handler or a all handlers for an event
   * @param event The event name to target
   * @param callback The specific callback to remove, empty for all
   */
  public off<T extends keyof EventList>(event: T, callback?: EventBusCallback<EventList[T]>): void {
    if (callback) {
      /** Remove handlers matching both the event and the callback */
      this.handlers = this.handlers.filter(
        (handler) => !(handler.event === event && handler.callback === callback)
      );
    } else {
      /** Remove all handlers for the specified event */
      this.handlers = this.handlers.filter((handler) => handler.event !== event);
    }
  }
}
