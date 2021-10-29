import { FC } from "react";
import { ToastContainer } from "react-toastify"; // Notifications

// Components
import Form from "../components/Form";

const Home: FC = () => {
  return (
    <>
      <ToastContainer limit={3} />
      <div className="home-page">
        <Form />
      </div>
    </>
  );
};

export default Home;
