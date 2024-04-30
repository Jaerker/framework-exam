import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error  = useRouteError();
    console.log(error);

    return (
        <section id='error-page'>
            <h1>Oops, något hände där!</h1>
            <p>Här vill vi egentligen inte hamna, det betyder att det blev något problem på vägen! Meddela gärna vad som hände (och ta med felmeddelandet här nedan) till johanjakberger@gmail.com! </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </section>
    );
}

export default ErrorPage;