import Link from 'next/link';

// シンプルなヘッダーコンポーネント
import Header from './components/Header';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダーの呼び出し */}
      <Header />

      {/* メインコンテンツ */}
      <main className="flex-grow flex flex-col items-center p-24">
        <p>遠くにいても安心。みまもりは高齢者と家族をつなぐ、安心のコミュニケーションアプリです</p>
        
        {/* 新規登録画面へのリンク */}
        <Link href="/register" passHref>
          新規登録
        </Link>
      </main>

      {/* フッターの呼び出し */}
    </div>
  );
};

export default Home;
