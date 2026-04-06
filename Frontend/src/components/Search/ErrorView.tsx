import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorView() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    // fel från loader/action (throw new Response)
    return (
      <div style={{ padding: 16 }}>
        <h1>Fel {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data && <pre>{JSON.stringify(error.data, null, 2)}</pre>}
      </div>
    );
  }
  // runtime-fel i element
  return (
    <div style={{ padding: 16 }}>
      <h1>Något gick fel</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {error instanceof Error ? `${error.message}\n\n${error.stack}` : String(error)}
      </pre>
    </div>
  );
}
