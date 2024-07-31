/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
	remotePatterns: [
	  {
		protocol: 'https',
		hostname: 's1.ticketm.net',
		port: '',
		pathname: '/**',
	  },
	  {
		protocol: 'https',
		hostname: 'i.ticketweb.com',
		port: '',
		pathname: '/**',
	  },
	],
  },
};

export default nextConfig;
