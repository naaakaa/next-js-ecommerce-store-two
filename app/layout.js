import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home | Bike Kitchen Store',
    template: '%s | Bike Kitchen Store',
  },
  description: 'Buy bikes and accessories',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <nav>
            <h3>Bike Kitchen Logo</h3>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/cart">Cart</Link>
          </nav>
        </div>

        {Math.floor(Math.random() * 10)}
        {children}
      </body>
    </html>
  );
}
