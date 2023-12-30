import Navbar from "../components/navbar";

const LayoutPage = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
};

export default LayoutPage;
