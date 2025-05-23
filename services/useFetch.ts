import { useEffect, useState } from "react";

const useFetch=<T>(fetchfunction:()=>Promise<T>, autofetch=true)=>{
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const result = await fetchfunction();
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err: new Error("An error occurred"));
        } finally {
            setLoading(false);
        }
    };

    const reset=()=>{
        setData(null);
        setLoading(false);
        setError(null);
    }

    useEffect(() => {
        if (autofetch) {
            fetchData();
        }
    },[])

    return { data, loading, error, refetch: fetchData, reset };
}

export default useFetch;