import axios from "axios";
import { useEffect, useState } from "react";

interface IUser { name: string }

export const App = () => {
  const [state, setState] = useState<IUser>();

  useEffect(() => {
    axios
      .get<{ message: IUser }>(process.env.REACT_APP_API_URL + "/")
      .then((data) => {
        setState(data.data.message);
      });
  }, []);

  return <h1>{state?.name ? `Welcome ${state?.name}` :  'loading...'}</h1>;
};
