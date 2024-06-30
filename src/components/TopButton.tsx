import Link from 'next/link';
import React, { FC } from 'react';

interface TopButtonProps {
  href?: string;
  title?: string;
  children: React.ReactNode;
}

const TopButton: FC<TopButtonProps> = ({ href = "#", title = "Button", children }) => {
  return (
    <div className="relative inline-flex group">
      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#fcffa4] via-[#fdfd96] to-[#fcffa4] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
      </div>
      <Link href={href} legacyBehavior>
        <a title={title}
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button">
          {children}
        </a>
      </Link>
    </div>
  );
};

export default TopButton;
