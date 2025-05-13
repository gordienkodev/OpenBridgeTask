import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Billing/Page',
  description: 'description of billing/page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
