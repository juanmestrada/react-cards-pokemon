import useLocalStorage from "./useLocalStorage";
import axios from "axios";

const useAxios = (key, url) => {
    const [responses, setResponses] = useLocalStorage(key);

    const addResData = async (formatter = data => data, restOfUrl = "") => {
        const res = await axios.get(`${url}${restOfUrl}`);

        setResponses(data => [...data, formatter(res.data)]);
    }

    const resetResData = () => {
        setResponses([]);
    }

    return [responses, addResData, resetResData];
};

export default useAxios;