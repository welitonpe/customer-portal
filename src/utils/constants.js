import Administrator from "../assets/administratorIcon.svg";
import TicketCreatorIcon from "../assets/tiketCreatorIcon.svg";
import TicketWatcherIcon from "../assets/ticketWatcherIcon.svg";

const steps = {
  welcome: 0,
  roles: 1,
  invites: 2,
  dxp: 3,
};

const rolesId = {
  admin: 1,
  creator: 2,
  watcher: 3,
};

const roles = [
  {
    id: rolesId.admin,
    name: "Administrator",
    icon: Administrator,
  },
  {
    id: rolesId.creator,
    name: "Ticket Creator",
    icon: TicketCreatorIcon,
  },
  {
    id: rolesId.watcher,
    name: "Ticket Watcher",
    icon: TicketWatcherIcon,
  },
];

export { steps, roles, rolesId };
