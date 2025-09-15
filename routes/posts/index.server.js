import { html, htmlToResponse } from "mastro";
import { readMarkdownFiles } from "mastro/markdown";

export const GET = async () => {
  const posts = await readMarkdownFiles("data/posts/*.md");
  return htmlToResponse(
    html`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Posts</title>
          <link rel="stylesheet" href="/site.css">
        </head>
        <body>
          <h1>Posts</h1>
            ${posts.map((post) =>
              html`
                <p>
                  <a href="${"/posts" + post.path.slice(11, -3)}">${post.meta.title}</a>
                </p>
              `
            )}
        </body>
      </html>
    `,
  );
};

