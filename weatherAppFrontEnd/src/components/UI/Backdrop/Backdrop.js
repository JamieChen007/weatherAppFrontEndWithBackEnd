import ReactDOM from "react-dom";

const Backdrop = ({ children }) => {
  const backdropRoot = document.getElementById("backdrop-root");

  return ReactDOM.createPortal(
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50">
      {children}
    </div>,
    backdropRoot
  );
};

export default Backdrop;
