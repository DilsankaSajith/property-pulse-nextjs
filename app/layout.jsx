import { Poppins } from 'next/font/google';
import '@/assets/styles/globals.css';

const poppins = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '600'],
});

export const metadata = {
  title: 'Property Pulse',
  keywords: 'rental, property, real state',
  description: 'Find the perfect retal property',
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body className={`${poppins.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
