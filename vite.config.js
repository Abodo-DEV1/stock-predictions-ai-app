// vite.config.js (CommonJS)
module.exports = async () => {
  const { defineConfig } = await import('vite');
  const cloudflare = (await import('@cloudflare/vite-plugin')).default;
  
  return defineConfig({
    plugins: [cloudflare()],
    // ... other config
  });
};