import { Poppins } from 'next/font/google';
import '../assets/styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthProvider from '../components/AuthProvider';

const poppins = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Property Pulse',
  keywords: 'rental, property, real state',
  description: 'Find the perfect retal property',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body className={`${poppins.className}`}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
