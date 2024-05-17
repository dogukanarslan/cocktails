module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apipics.s3.amazonaws.com'
      }
    ]
  }
};
