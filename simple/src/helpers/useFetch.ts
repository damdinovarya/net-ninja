import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url)
            .then(res => {
                if (!res.ok) throw Error(`could not fetch the data`);
                return res.json();
            })
            .then((data: T) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err: Error) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });
            return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;