/** @type {import('next').NextConfig} */
//ホットリロードする為、変更

const nextConfig = {
  output: 'standalone'//公式Dockerfileはstandaloneでのビルドを想定しているため追加

}
module.exports = {
  // 他の設定...
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};
module.exports = nextConfig
