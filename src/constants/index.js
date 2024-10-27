import Home from "../assets/images/home.png";
import Noti from "../assets/images/noti.png";
import Trade from "../assets/images/trade.png";

export const sidebarLinks = [
  {
    imgURL: Home,
    route: "/channels",
    label: "Channels",
  },
  {
    imgURL: Trade,
    route: "/trading/list",
    label: "Trade",
  },
  {
    imgURL: Noti,
    route: "/notifications",
    label: "Noti",
  },
];

export const INITIAL_VISIBLE_COLUMNS = [
  "username",
  "email",
  "role",
  "createdAt",
  "actions",
];

export const columns = [
  {
    key: "username",
    label: "UserName",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "role",
    label: "Role",
  },
  {
    key: "createdAt",
    label: "CreateAt",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

export const FOREX_INITIAL_VISIBLE_COLUMNS = [
  "pair",
  "price",
  "createdAt",
  "actions",
];

export const forex_columns = [
  {
    key: "pair",
    label: "Pair",
  },
  {
    key: "price",
    label: "Price",
  },
  {
    key: "createdAt",
    label: "CreateAt",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

export const CHANNEL_INITIAL_VISIBLE_COLUMNS = [
  "name",
  "created_by",
  "members",
  "isPrivate",
  "createdAt",
  "actions",
];

export const channel_columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "created_by",
    label: "Create By",
  },
  {
    key: "members",
    label: "Member",
  },
  {
    key: "isPrivate",
    label: "Is Private",
  },
  {
    key: "createdAt",
    label: "CreateAt",
  },
  {
    key: "actions",
    label: "Actions",
  },
];
