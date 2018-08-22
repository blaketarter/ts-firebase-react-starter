export function onSignal() {
  console.log("server is starting cleanup"); //tslint:disable-line
  // start cleanup of resource, like databases or file descriptors
  return Promise.resolve();
}

export function onHealthCheck() {
  // checks if the system is healthy, like the db connection is live
  // resolves, if health, rejects if not
  return Promise.resolve();
}
