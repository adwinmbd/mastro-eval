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
          <link rel="stylesheet" href="/site.css" />
        </head>
        <body>
          <h1>Posts</h1>
          ${posts.map((post) => {
            const filename = post.path.split(/[\\/]/).pop();
            const slug = filename.replace(/\.md$/, "");
            return html`
              <p>
                <a href="${"/posts/" + slug}">${post.meta.title}</a>
              </p>
            `;
          })}
        </body>
      </html>
    `
  );
};
