// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-4xl font-bold">
              <span className="text-gray-800">LOGO FOR TEXT</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-orange-400 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-400 transition-colors">
              About
            </Link>
            <Link href="/tours" className="text-gray-700 hover:text-orange-400 transition-colors">
              Tours
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-orange-400 transition-colors">
              Login
            </Link>
            <button className="bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition-colors">
              Register
            </button>
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