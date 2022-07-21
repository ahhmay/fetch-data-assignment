import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        (
            function () {
                try {
                    axios.get(url).then(response => { 
                        setData(response.data);
                        setLoading(false);
                    });
                }
                catch(error) {
                    setError(error);
                    setLoading(false);
                }
                // finally {
                //     setLoading(false);
                // }
            }
        )()
    }, [url]);

    return { loading, error, data };
}
export default useFetch;