import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

//this is the top level component in Next
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
