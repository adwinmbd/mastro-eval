import { getParams, html, htmlToResponse, readDir } from "mastro";
import { readMarkdownFile } from "mastro/markdown";

export const GET = async (req) => {
  const { slug } = getParams(req.url);
  console.log('the slug variable holds the value', slug)
  const post = await readMarkdownFile(`data/posts/${slug}.md`);
  // posts.map((post) =>
  return htmlToResponse(
    html`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${post.meta.title}</title>
          <link rel="stylesheet" href="/site.css">
        </head>
        <body>
          <h1>${post.meta.title}</h1>
          <main>
            ${post.content}
          </main>
        </body>
      </html>
    `,
  );
};

export const getStaticPaths = async () => {
  const posts = await readDir("../../data/posts/");
  return posts.map(p => "/posts/" + p.slice(0, -3) + "/");
}


