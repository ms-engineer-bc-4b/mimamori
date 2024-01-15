import Link from 'next/link';

// シンプルなヘッダーコンポーネント
const Header = () => {
  return (
    <header className="text-center py-4 bg-gray-200">
      {/* ここにヘッダーのコンテンツを追加 */}
      みまもり

      <Link href="/register" passHref>
      新規登録
      </Link>

      <Link href="/senior-login" passHref>
      シニア用ログイン
      </Link>

      <Link href="/login" passHref>
      ご家族用ログイン
      </Link>

      
    </header>
  );
};

export default function Home() {
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
}
