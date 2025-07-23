// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-gray-800">LOGO FOR TEXT</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white bg-orange-400 px-4 py-2 rounded-full font-medium hover:bg-orange-500 transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-400 transition-colors duration-300">
              About
            </Link>
            <Link href="/tours" className="text-gray-700 hover:text-orange-400 transition-colors duration-300">
              Tours
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-orange-400 transition-colors duration-300">
              Login
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;