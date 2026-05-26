const posthogProxyPath = "/relay";
const posthogIngestHost = (
  process.env.POSTHOG_INGEST_HOST || "https://us.i.posthog.com"
).replace(/\/$/, "");
const posthogAssetsHost = (
  process.env.POSTHOG_ASSETS_HOST || "https://us-assets.i.posthog.com"
).replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: `${posthogProxyPath}/static/:path*`,
        destination: `${posthogAssetsHost}/static/:path*`,
      },
      {
        source: `${posthogProxyPath}/array/:path*`,
        destination: `${posthogAssetsHost}/array/:path*`,
      },
      {
        source: `${posthogProxyPath}/:path*`,
        destination: `${posthogIngestHost}/:path*`,
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
