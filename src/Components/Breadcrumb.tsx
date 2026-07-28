'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumb() {
  const pathname = usePathname();

  // Define breadcrumb paths
  const breadcrumbMap: { [key: string]: BreadcrumbItem[] } = {
    '/about': [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
    ],
    '/blog': [
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog' },
    ],
    '/contact': [
      { name: 'Home', href: '/' },
      { name: 'Contact Us', href: '/contact' },
    ],
    '/download': [
      { name: 'Home', href: '/' },
      { name: 'Download APK', href: '/download' },
    ],
    '/deposit': [
      { name: 'Home', href: '/' },
      { name: 'Deposit', href: '/deposit' },
    ],
    '/withdraw': [
      { name: 'Home', href: '/' },
      { name: 'Withdraw', href: '/withdraw' },
    ],
    '/login': [
      { name: 'Home', href: '/' },
      { name: 'Login', href: '/login' },
    ],
    '/register': [
      { name: 'Home', href: '/' },
      { name: 'Register', href: '/register' },
    ],
    '/privacy-policy': [
      { name: 'Home', href: '/' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ],
    '/terms-and-conditions': [
      { name: 'Home', href: '/' },
      { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    ],
    '/disclaimer': [
      { name: 'Home', href: '/' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
    '/sitemap-page': [
      { name: 'Home', href: '/' },
      { name: 'Sitemap', href: '/sitemap-page' },
    ],
  };

  const breadcrumbs = breadcrumbMap[pathname as string] || [{ name: 'Home', href: '/' }];

  // Generate schema markup for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://milwin.com${item.href}`,
    })),
  };

  return (
    <>
      {/* Breadcrumb Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm"
        aria-label="Breadcrumb"
      >
        <div className="flex items-center gap-2 text-slate-400">
          {breadcrumbs.map((item, index) => (
            <div key={item.href} className="flex items-center gap-2">
              {index > 0 && <span className="text-slate-600">/</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-amber-400 font-semibold">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-amber-400 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}
