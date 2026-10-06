import type { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    // `error` is typed as unknown, so we check that it is an Error before reading .message
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(message);

    return (
        // role="alert" makes screen readers announce the message
        <div role="alert" className="flex flex-col items-center p-4">
            <h1 className="text-red-500">Oops, something went wrong.</h1>
            <p className="text-center">
                We couldn't display this page. Please try again, or go back to
                the start page.
            </p>
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
