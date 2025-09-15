import { html, htmlToResponse } from "mastro";

export const GET = async () => {
  return htmlToResponse(
    html`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Deparments</title>
          <link rel="stylesheet" href="/site.css">
        </head>
        <body>
          <h1>Departments</h1>
          <p>Below is the list of departments.</p>
        </body>
      <html>
    `,
  );
};
