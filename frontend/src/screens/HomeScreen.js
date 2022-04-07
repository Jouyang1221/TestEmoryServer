import React, { useEffect } from "react";
import HomePage from "../components/HomePage/HomePage";

const HomeScreen = () => {
  //   const dispatch = useDispatch();

  //   const productList = useSelector((state) => state.productList);
  //   const { loading, error, products } = productList;

  //   useEffect(() => {
  //     dispatch(listProducts());
  //   }, [dispatch]);

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default HomeScreen;
