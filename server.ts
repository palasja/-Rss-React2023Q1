import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3001;

const vite = await createViteServer({ server: { middlewareMode: true }, appType: 'custom' });

const app = express();
app.use(vite.middlewares);
app.use('*', async (req, res, next) => {
  const url = req.originalUrl;

  try {
    let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

    template = await vite.transformIndexHtml(url, template);

    const { render } = await vite.ssrLoadModule('/src/ServerApp.tsx');

    const appHtml = await render(url);

    const html = template.replace(`<!--ssr-outlet-->`, appHtml);

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (e) {
    vite.ssrFixStacktrace(e as Error);
    next(e);
  }
});

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
