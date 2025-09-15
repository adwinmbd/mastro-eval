import { html, htmlToResponse } from "mastro";

export const GET = async () => {
  return htmlToResponse(
    html`
      <!DOCTYPE html>
      <html>
        <head>
          <title>News</title>
          <link rel="stylesheet" href="/site.css">
        </head>
        <body>
          <h1>News</h1>
          <p>Once we have news, we'll let you know here.</p>
        </body>
      <html>
    `,
  );
};
