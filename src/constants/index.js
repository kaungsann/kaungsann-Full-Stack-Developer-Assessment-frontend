import Home from "../assets/images/home.png";
import Noti from "../assets/images/noti.png";
import Message from "../assets/images/message.png";

export const sidebarLinks = [
  {
    imgURL: Home,
    route: "/channels",
    label: "Channels",
  },
  {
    imgURL: Message,
    route: "/messages",
    label: "Message",
  },
  {
    imgURL: Noti,
    route: "/notifications",
    label: "Noti",
  },
];

export const INITIAL_VISIBLE_COLUMNS = [
  "account",
  "contact",
  "cur",
  "bet_amount",
  "member_count",
  "trun_over",
  "actions",
  // "agent_com",
  // "agent_total",
  // "master_agent_turnover",
  // "master_agent_wl",
  // "master_agent_com",
  // "master_agent_total",
  // "super_turnover",
  // "super_wl",
  // "super_com",
  // "super_total",
  // "company_turnover",
  // "company_wl",
  // "company_com",
  // "company_total",
];

export const columns = [
  {
    key: "account",
    label: "Account",
  },
  {
    key: "contact",
    label: "Contact",
  },
  {
    key: "cur",
    label: "Cur",
  },
  {
    key: "bet_amount",
    label: "Bet Amount",
  },
  {
    key: "trun_over",
    label: "Trun Over",
  },
  {
    key: "member_count",
    label: "Member Count",
  },
  {
    key: "gross_comm",
    label: "Gross Comm",
  },
  {
    key: "member_wl",
    label: "Member W/L",
  },
  {
    key: "member_com",
    label: "Member Com",
  },
  {
    key: "member_total",
    label: "Member Total",
  },
  {
    key: "agent_turnover",
    label: "Agent Turnover",
  },
  {
    key: "agent_wl",
    label: "Agent W/L",
  },
  {
    key: "agent_com",
    label: "Agent Com",
  },
  {
    key: "agent_total",
    label: "Agent Total",
  },
  {
    key: "master_agent_turnover",
    label: "Master Agent Turnover",
  },
  {
    key: "master_agent_wl",
    label: "Master Agent W/L",
  },
  {
    key: "master_agent_com",
    label: "Master Agent Com",
  },
  {
    key: "master_agent_total",
    label: "Master Agent Total",
  },
  {
    key: "super_turnover",
    label: "Super Turnover",
  },
  {
    key: "super_wl",
    label: "Super W/L",
  },
  {
    key: "super_com",
    label: "Super Com",
  },
  {
    key: "super_total",
    label: "Super Total",
  },
  {
    key: "company_turnover",
    label: "Company Turnover",
  },
  {
    key: "company_wl",
    label: "Company W/L",
  },
  {
    key: "company_com",
    label: "Company Com",
  },
  {
    key: "company_total",
    label: "Company Total",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

export const initial_ibet_columns = [
  "account",
  "contact",
  "cur",
  "amount",
  "valid_amount",
  "bet_amount",
  "actions",
];

export const ibet_columns = [
  {
    key: "account",
    label: "Account",
  },
  {
    key: "contact",
    label: "Contact",
  },
  {
    key: "cur",
    label: "Cur",
  },
  {
    key: "amount",
    label: "Amount",
  },
  {
    key: "valid_amount",
    label: "Validate Amount",
  },
  {
    key: "bet_amount",
    label: "Bet Amount",
  },

  {
    key: "members_wl",
    label: "Member W/L",
  },
  {
    key: "members_com",
    label: "Member Com",
  },
  {
    key: "member_total",
    label: "Members Total",
  },
  {
    key: "agent_profit_wl",
    label: "Agent ProfitW W/L",
  },
  {
    key: "agent_profit_com",
    label: "Agent ProfitW Com",
  },
  {
    key: "agent_profit_total",
    label: "Agent ProfitW Total",
  },
  {
    key: "master_profit_wl",
    label: "Master Profit W/L",
  },
  {
    key: "master_profit_com",
    label: "Master Profit Com",
  },
  {
    key: "master_profit_total",
    label: "Master Profit Total",
  },
  {
    key: "senior_profit_wl",
    label: "Senior Profit W/L",
  },
  {
    key: "senior_profit_com",
    label: "Master Agent Com",
  },
  {
    key: "senior_profit_total",
    label: "Master Agent Total",
  },
  {
    key: "company_wl",
    label: "Company W/L",
  },
  {
    key: "company_com",
    label: "Company Com",
  },
  {
    key: "company_total",
    label: "Company Total",
  },
  {
    key: "actions",
    label: "Actions",
  },
];
