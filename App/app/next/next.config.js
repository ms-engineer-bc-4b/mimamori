/** @type {import('next').NextConfig} */
//ホットリロードする為、変更

const nextConfig = {
  output: 'standalone'//公式Dockerfileはstandaloneでのビルドを想定しているため追加

}

module.exports = nextConfig
