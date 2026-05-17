'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import { Card } from './Card';

export const Header = () => {
  const { user, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary border-b border-tertiary/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold text-lg">V</span>
          </div>
          <span className="text-white font-bold text-xl hidden sm:inline">VUNJA BEYI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/dashboard" className="text-tertiary hover:text-accent transition">
            Dashboard
          </Link>
          <Link href="/wallet" className="text-tertiary hover:text-accent transition">
            Wallet
          </Link>
          <Link href="/investments" className="text-tertiary hover:text-accent transition">
            Investments
          </Link>
          <Link href="/referrals" className="text-tertiary hover:text-accent transition">
            Referrals
          </Link>
        </nav>

        {/* User Section */}
        <div className="flex items-center gap-4 relative">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-right">
                <div>
                  <p className="text-white font-medium text-sm">{user.firstName}</p>
                  <p className="text-tertiary text-xs">{user.vipLevel.toUpperCase()}</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent hover:bg-accent/30 transition"
              >
                <span className="text-lg font-bold">{user.firstName.charAt(0)}</span>
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <Card variant="glass" className="absolute top-12 right-0 w-48">
                  <div className="space-y-2">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-white hover:text-accent transition rounded"
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-white hover:text-accent transition rounded"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-danger hover:bg-danger/10 transition rounded"
                    >
                      Logout
                    </button>
                  </div>
                </Card>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="px-4 py-2 text-accent hover:text-accent-dark transition text-sm font-medium"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-accent text-primary rounded-lg hover:bg-accent-dark transition text-sm font-medium"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button className="md:hidden w-10 h-10 rounded-lg border border-tertiary/30 flex items-center justify-center">
            <span className="text-accent">☰</span>
          </button>
        </div>
      </div>
    </header>
  );
};
