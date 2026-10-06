import type { User } from "../types/User";

// Returns a Promise of User[], so the type follows through to useQuery and the pages.
// Throws an Error with a user-friendly message, which useQuery exposes as `error`.
const fetchUsers = async (): Promise<User[]> => {
    // Declared outside the try block so it can be used after it
    let res: Response;

    // The try/catch only wraps fetch itself, so it catches network errors
    try {
        res = await fetch(
            "https://api-userapi.onrender.com/api/users/getUsers",
            {
                headers: {
                    "x-api-key": "elev-hemlighet-2026",
                },
            },
        );
    } catch {
        throw new Error(
            "Couldn't connect. Please check your internet connection and try again.",
        );
    }

    if (!res.ok) {
        // Technical details are logged for the developer, the user gets a friendly message
        console.error("Error code: " + res.status);

        if (res.status === 429)
            throw new Error(
                "We've reached the daily limit for requests. Please try again tomorrow.",
            );
        if (res.status === 401 || res.status === 403)
            throw new Error(
                "We couldn't verify access to the user data. Please contact support.",
            );
        if (res.status === 404)
            throw new Error(
                "We couldn't find the user data you're looking for.",
            );
        if (res.status >= 500)
            throw new Error(
                "The server is having problems right now. Please try again in a few minutes.",
            );
        throw new Error(
            "Something went wrong while loading the users. Please try again.",
        );
    }

    const users = await res.json();
    return users;
};

export { fetchUsers };
