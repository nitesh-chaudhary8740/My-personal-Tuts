// import { useEffect, useState } from "react";


// function Mypage(){
//     // const [count,setcount] = useState(0);
//     const [apiData, setAPIData] = useState({})

//     useEffect (()=>{
//         async function loadData() {
//         const data = await fetch("https://api.github.com/users/nitesh-chaudhary8740");
//         console.log(data)
//         const result = await data.json()
//             setAPIData(result)
//         }
//          loadData()
//     },[])

//     return <>
//     <div>
//         {JSON.stringify(apiData)}
        
//     </div>
//     </>
// }
// export default Mypage;
import React, { useEffect, useState } from "react";

// 1. Define a more specific (but still flexible) type alias for your API data.
//    We list common properties from the GitHub User API and mark them as optional
//    (`?`) if they might be missing or `null`.
//    The index signature now uses 'unknown' instead of 'any' to enforce type safety.
type GitHubUser = {
    login?: string; // Optional because the object might be empty initially
    // id?: number;
    // node_id?: string;
    avatar_url?: string;
 


    // The index signature now uses 'unknown' to satisfy ESLint's no-explicit-any rule.
    // This means any other property not explicitly listed will have type 'unknown'.
    [key: string]: unknown;
};

// Type the functional component explicitly with React.FC (Functional Component)
const Mypage: React.FC = () => {
    // 2. Explicitly type your state variables for clarity and safety.
    //    apiData can be GitHubUser or null (initially null, representing no data yet).
    const [apiData, setAPIData] = useState<GitHubUser | null>(null);
    //    isLoading tracks if data is currently being fetched.
    const [isLoading, setIsLoading] = useState<boolean>(true);
    //    error stores any error message, or null if no error.
    const [error, setError] = useState<string | null>(null);

    // useEffect hook for side effects, like data fetching.
    // The empty dependency array '[]' ensures this runs only once after the initial render.
    useEffect(() => {
        // Define an asynchronous function to fetch the data.
        const loadData = async () => {
            try {
                setIsLoading(true); // Set loading to true when starting the fetch
                setError(null);    // Clear any previous error messages

                // 3. First await: Get the Response object from the fetch call.
                const response = await fetch("https://api.github.com/users/nitesh-chaudhary8740");

                // Check if the HTTP response was successful (status code 200-299).
                if (!response.ok) {
                    // If not OK, throw an Error with status details.
                    throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
                }

                // 4. Second await: Parse the Response body as JSON.
                //    Explicitly cast the result to your GitHubUser type.
                const jsonData: GitHubUser = await response.json();
                setAPIData(jsonData); // Update the state with the fetched JSON data

            } catch (err: unknown) { // Use 'unknown' for the caught error to comply with ESLint
                console.error("Failed to fetch data:", err);

                // Safely determine the error message based on the type of 'err'.
                if (err instanceof Error) {
                    setError(err.message); // If it's a standard Error object, use its message
                } else if (typeof err === 'string') {
                    setError(err); // If it's just a string, use it directly
                } else {
                    setError("An unknown error occurred during data fetching."); // Generic fallback
                }
                setAPIData(null); // Clear any existing data on error
            } finally {
                // This block runs regardless of success or failure.
                setIsLoading(false); // Set loading to false once the operation is complete.
            }
        };

        loadData(); // Call the async data loading function.
    }, []); // Empty dependency array ensures this effect runs only once on component mount.

    // 5. Render the component based on the state (loading, error, or data).
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>GitHub User Profile</h1>

            {isLoading && <p>Loading user data...</p>}

            {error && (
                <p style={{ color: 'red', border: '1px solid red', padding: '10px', borderRadius: '4px' }}>
                    Error: {error}
                </p>
            )}

            {/* Render data only if not loading, no error, and apiData is not null */}
            {!isLoading && !error && apiData && (
                <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
                    {/* Access properties. Use optional chaining (?) or type assertions (as Type)
                        if the property is marked as optional or its type is 'unknown' in GitHubUser. */}
                    {apiData.avatar_url && (
                        <img
                            src={apiData.avatar_url as string} // Assert as string because its base type is unknown
                            alt={`${apiData.login as string || 'User'}'s avatar`} // Assert login too
                            style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px', display: 'block', margin: '0 auto' }}
                        />
                    )}
                    <h2 style={{ textAlign: 'center', margin: '10px 0' }}>
                        {(apiData.name || apiData.login) as string || 'N/A'}
                    </h2>
                    <p>
                        <strong>Username:</strong> <a href={apiData.html_url as string} target="_blank" rel="noopener noreferrer">{apiData.login as string}</a>
                    </p>
                    {/* Conditionally render properties that might be null or undefined */}
                    {typeof apiData.bio === 'string' && apiData.bio && <p><strong>Bio:</strong> {apiData.bio}</p>}
                    {typeof apiData.company === 'string' && apiData.company && <p><strong>Company:</strong> {apiData.company}</p>}
                    {typeof apiData.location === 'string' && apiData.location && <p><strong>Location:</strong> {apiData.location}</p>}
                    <p><strong>Public Repositories:</strong> {apiData.public_repos as number}</p>
                    <p><strong>Followers:</strong> {apiData.followers as number}</p>
                    <p><strong>Following:</strong> {apiData.following as number}</p>

                    {/* Example of displaying raw JSON for debugging */}
                    {/* <h3 style={{ marginTop: '20px' }}>Raw Data:</h3>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '4px', overflowX: 'auto' }}>
                        {JSON.stringify(apiData, null, 2)}
                    </pre> */}
                </div>
            )}

            {!isLoading && !error && !apiData && (
                <p>No user data available (check network or API endpoint).</p>
            )}
        </div>
    );
};

export default Mypage;