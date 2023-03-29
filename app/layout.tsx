import './globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="w-full h-screen flex justify-center items-center text-center">
          {children}
        </div>
      </body>
    </html>
  );
}
