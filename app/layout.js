import { Inter } from 'next/font/google';

import Navbar from 'components/Navbar';
import 'styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
  title: 'Cocktails'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
