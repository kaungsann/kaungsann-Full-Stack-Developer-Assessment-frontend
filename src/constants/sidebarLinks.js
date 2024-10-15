import threeSixFive from "../assets/images/365.png";
import ibetIcon from "../assets/images/ibet.png";
import sideBarIcon3 from "../assets/images/logo.png";
import sideBarIcon4 from "../assets/images/logo.png";

export const sidebarLinks = [
  {
    imgURL: threeSixFive,
    route: "/three-six-five",
    label: "365",
  },
  {
    imgURL: ibetIcon,
    route: "/ibet",
    label: "IBET",
  },
  {
    imgURL: sideBarIcon3,
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: sideBarIcon4,
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];

export const INITIAL_VISIBLE_COLUMNS = [
  "account",
  "contact",
  "cur",
  "bet_amount",
  "member_count",
  "trun_over",
  "action",
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
    label: "Action",
  },
  {
    key: "action",
    label: "Action",
  },
];
