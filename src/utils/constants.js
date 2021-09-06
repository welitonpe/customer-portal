const steps = {
  welcome: 0,
  role: 1,
  invite: 2,
  dxp: 3,
};

const roles = {
  admin: {
    id: 1,
    name: "Administrator",
    icon: "TDB",
  },
  ticketCreator: {
    id: 2,
    name: "Ticket Creator",
    icon: "TDB",
  },
  ticketWatcher: {
    id: 3,
    name: "Ticket Watcher",
    icon: "TDB",
  },
};

export { steps, roles };
