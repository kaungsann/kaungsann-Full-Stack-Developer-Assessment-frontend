import PropTypes from "prop-types";
import logo from "./assets/images/logo.png";
import SideBar from "./components/SideBar";
import MobileNav from "./components/MobileNav";
import SecondSideBar from "./components/SecondSideBar";
import TradeRightSideBar from "./components/TradeRightSideBar";

const AppContainer = ({ children }) => {
  return (
    <>
      <main className="flex h-screen w-full font-inter">
        <SideBar />
        <SecondSideBar />
        <div className="flex size-full flex-col relative custom-scrollbar">
          <div className="root-layout">
            <img src={logo} alt="logo" className="w-20 h-16" />

            <div>{<MobileNav />}</div>
          </div>
          <div className="h-screen overflow-y-scroll custom-scrollbar">
            {children}
          </div>
        </div>
        <TradeRightSideBar />
      </main>
    </>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
