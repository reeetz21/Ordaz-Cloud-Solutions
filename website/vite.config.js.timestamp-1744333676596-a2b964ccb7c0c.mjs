// vite.config.js
import { defineConfig } from "file:///Users/ritaordaz/Documents/Rita/Projects/Portfolio%20Rita%20v2/website/node_modules/vite/dist/node/index.js";
import react from "file:///Users/ritaordaz/Documents/Rita/Projects/Portfolio%20Rita%20v2/website/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwindcss from "file:///Users/ritaordaz/Documents/Rita/Projects/Portfolio%20Rita%20v2/website/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///Users/ritaordaz/Documents/Rita/Projects/Portfolio%20Rita%20v2/website/node_modules/autoprefixer/lib/autoprefixer.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  server: {
    host: true,
    // Expose to all network interfaces
    port: 5173,
    // Specify port
    open: true,
    // Auto-open in browser
    strictPort: true
    // Fail if port is already in use
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcml0YW9yZGF6L0RvY3VtZW50cy9SaXRhL1Byb2plY3RzL1BvcnRmb2xpbyBSaXRhIHYyL3dlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yaXRhb3JkYXovRG9jdW1lbnRzL1JpdGEvUHJvamVjdHMvUG9ydGZvbGlvIFJpdGEgdjIvd2Vic2l0ZS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcml0YW9yZGF6L0RvY3VtZW50cy9SaXRhL1Byb2plY3RzL1BvcnRmb2xpbyUyMFJpdGElMjB2Mi93ZWJzaXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcydcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIHRhaWx3aW5kY3NzLFxuICAgICAgICBhdXRvcHJlZml4ZXIsXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IHRydWUsICAgIC8vIEV4cG9zZSB0byBhbGwgbmV0d29yayBpbnRlcmZhY2VzXG4gICAgcG9ydDogNTE3MywgICAgLy8gU3BlY2lmeSBwb3J0XG4gICAgb3BlbjogdHJ1ZSwgICAgLy8gQXV0by1vcGVuIGluIGJyb3dzZXJcbiAgICBzdHJpY3RQb3J0OiB0cnVlLCAvLyBGYWlsIGlmIHBvcnQgaXMgYWxyZWFkeSBpbiB1c2VcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRYLFNBQVMsb0JBQW9CO0FBQ3paLE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGtCQUFrQjtBQUd6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixZQUFZO0FBQUE7QUFBQSxFQUNkO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
