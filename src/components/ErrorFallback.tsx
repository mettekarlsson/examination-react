import type { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    //kontrollerar att error är av typen Error, annars skrivs "unknown error" ut
    const message = error instanceof Error ? error.message : "Unknown error";

    return (
        <div role="alert">
            <p>Something went wrong...</p>
            <p>{message}</p>
            <button onClick={resetErrorBoundary}>Try again!</button>
        </div>
    );
};

export default ErrorFallback;
