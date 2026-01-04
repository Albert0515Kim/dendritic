import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Dendritic Learning',
  description: 'Learn in graphs. Think in connections.',
  icons: {
    icon: '/DendriticLearning_icon_transparent.svg',
    shortcut: '/DendriticLearning_icon_transparent.svg',
    apple: '/DendriticLearning_icon_transparent.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-[#000300]" suppressHydrationWarning>
      <body className="min-h-screen bg-[#000300] text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
