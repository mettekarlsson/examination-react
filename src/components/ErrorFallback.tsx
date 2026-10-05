import type { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    //kontrollerar att error är av typen Error, annars skrivs "unknown error" ut
    const message = error instanceof Error ? error.message : "Unknown error";

    return (
        <div role="alert" className="flex flex-col items-center p-4">
            <p className="text-red-500">Something went wrong...</p>
            <p className="text-center">{message}</p>
            <button
                onClick={resetErrorBoundary}
                className="cursor-pointer mt-3 w-fit rounded-full bg-blue-500 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
            >
                Try again!
            </button>
        </div>
    );
};

export default ErrorFallback;
