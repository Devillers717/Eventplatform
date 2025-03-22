import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:
  {
    domains:['utfs.io'],
    remotePatterns:[
      {
        protocol: 'https',
        hostname: '7v7mrtmxe3.ufs.sh',
        port: '',
      },
      {
        protocol:'http',
        hostname: 'utfs.io',
        port:''
      }
    ]
  }
};

export default nextConfig;
