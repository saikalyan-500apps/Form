// composables/useMovieFetchData.js
import { useFetch } from "nuxt/app";

export function useMovieFetchData(){
    const response = useFetch('https://jsonplaceholder.typicode.com/users');
    const { data, loading, error } = response; 
    console.log(data)

    // const data = response;
    // const lodaing = data.response;

    // Check if data is available
    if (!loading && !error) {
        console.log(data);
    }

    return { data, loading, error }; 
}

// composables/useMovieFetchData.js
// import { useFetch } from "#app";

// export function useMovieFetchData(){
//     const response = useFetch('https://jsonplaceholder.typicode.com/users');
    
//     // Access data, loading, and error directly from the response object
//     console.log(response.data);
//     console.log(response.loading);
//     console.log(response.error);

//     // Check if data is available
//     if (!response.loading && !response.error) {
//         console.log(response.data);
//     }

//     return response; // Returning the entire response object
// }
