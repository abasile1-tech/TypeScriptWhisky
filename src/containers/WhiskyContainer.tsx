import { useEffect, useState } from "react";
import WhiskyList from "../components/WhiskyList";

const WhiskyContainer = () => {
  const [whiskies, setWhiskies] = useState([]);
  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    fetchWhiskies();
  }, []);

  const fetchWhiskies = () => {
    fetch(BASE_URL + "/api/whiskies")
      .then((response) => response.json())
      .then((whiskies) => setWhiskies(whiskies));
  };
  return (
    <>
      <WhiskyList whiskies={whiskies} />;
    </>
  );
};

export default WhiskyContainer;
