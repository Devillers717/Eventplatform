import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:
  {
    domains:['utfs.io'],
    remotePatterns:[
      {
        protocol:'http',
        hostname: 'utfs.io',
        port:''
      }
    ]
  }
};

export default nextConfig;
