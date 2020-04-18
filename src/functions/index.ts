import * as functions from 'firebase-functions';
import next from 'next';

const nextApp = next({ dev: false, conf: { distDir: 'dist/next' } });
const handle = nextApp.getRequestHandler();

export const app = functions.runWith({ memory: '1GB' }).https.onRequest(async (req, res) => {
  await nextApp.prepare();
  handle(req, res);
});
