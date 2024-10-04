class Client extends EventTarget {
  constructor() {
    super()

    this.queuedRequests = [];
    this.initialized = false;
    this.requests = {};

    this.socket = new WebSocket("ws://localhost:3003");
    this.socket.onopen = () => {
      this.initialized = true;

      this.send("initialize", {
        rootUri: "sandbox:///",
        capabilities: {}
      }, (result) => {
        this.capabilities = result.capabilities;
        this.initialized = true;

        this.queuedRequests.forEach((item) => {
          this.send(item.method, item.params, item.callback)
        })

        this.queuedRequests = [];
      });

      this.initialized = false;
    };

    this.socket.onmessage = (event) => {
      const message =
        JSON.parse(event.data);

      if (typeof message.id == "number") {
        const callback =
          this.requests[message.id];

        if (callback) {
          this.requests[message.id] = null;
          callback(message.result);
        };
      };

      if (message.method) {
        this.dispatchEvent(new CustomEvent(message.method, {
          detail: message.params
        }));
      };
    };
  }

  send(method, params, callback) {
    if (this.initialized) {
      const id =
        Object.keys(this.requests).length;

      this.requests[id] =
        callback;

      this.socket.send(JSON.stringify({
        method: method,
        jsonrpc: "2.0",
        params: params,
        id: id
      }));
    } else {
      this.queuedRequests.push({
        callback,
        method,
        params
      });
    }
  }
};

export default Client;
