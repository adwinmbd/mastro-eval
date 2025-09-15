import { html, htmlToResponse } from "mastro";

export const GET = async () => {
  return htmlToResponse(
    html`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Team</title>
          <link rel="stylesheet" href="/site.css">
        </head>
        <body>
          <h1>Team</h1>
          <p>Below is the list of our staff.</p>
        </body>
      <html>
    `,
  );
};
