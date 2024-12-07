import { useEffect, useState } from 'react';

export default function useFetch(fetchFunction , dependencies = []) {
    const [state , setState] = useState({
        data: [],
        loading: true,
        errorMessage: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFunction();
                setState({data , loading: false , errorMessage: ''})
            }
            catch (error) {
                setState({data: [] , loading: false , errorMessage: error?.message || "Error fetching data"});
            }
        }

        fetchData();
    } , dependencies)

    return [state.data , state.loading , state.errorMessage];
}
