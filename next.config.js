/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space'],
  },
  // env: {
  //   customKey: 'customValue',    
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: 'https://lvargascol.com',
  //       permanent: true,
  //     }
  //   ]
  // }
}

module.exports = nextConfig
