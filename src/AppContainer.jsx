import PropTypes from "prop-types";

const AppContainer = ({ children }) => {
  return (
    <>
      <div className="flex h-screen" style={{ height: "calc(100vh - 64px)" }}>
        <div className="flex-1 overflow-y-auto container mx-auto p-5">
          {children}
        </div>
      </div>
    </>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
