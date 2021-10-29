import React, { useEffect } from "react";

import { ToastContainer } from "react-toastify"; // Notifications

// Redux
/* import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../redux/booksSlice"; */

// Components
import Form from "../components/Form";
import Loading from "../components/Loading";

const Home = () => {
  /*   const dispatch = useDispatch();
  const { status } = useSelector((state) => state.books); */

  useEffect(() => {
    /*  dispatch(fetchBooks({})); */
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ToastContainer limit={3} />
      <div className="home-page">
        <Form />
        {/* Loading animation if API data hasn't been consummed yet */}
        {/*         {status === "loading" ? <Loading /> : <></>} */}
      </div>
    </>
  );
};

export default Home;
