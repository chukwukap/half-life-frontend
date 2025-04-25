import "./globals.css";
import { fontClasses } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Half Life",
    template: "%s | Half Life",
  },
  description: "Next-generation blockchain platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Check for stored theme preference or get from system preference
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                
                // Apply the theme class to document
                document.documentElement.classList.toggle('dark', theme === 'dark');
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${fontClasses.inter} ${fontClasses.roboto} antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
