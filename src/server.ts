import { App } from './app';

(async () => {
  const app = new App();
  await app.start(8080);
})();
