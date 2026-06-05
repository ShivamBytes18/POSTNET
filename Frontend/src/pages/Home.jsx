import { useEffect } from "react";
import  testConnection  from "../services/testServices.js";

const Home = () => {
  useEffect(() => {
    const checkConnection = async () => {
      try {
        const data = await testConnection();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    checkConnection();
  }, []);

  return <h1>Home Page</h1>;
};

export default Home;