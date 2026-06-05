import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TabMind – AI-Powered Browser Tab Organizer",
  description: "Automatically groups related tabs, saves sessions, and suggests when to close unused tabs based on your usage patterns."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5d76c39a-0854-4d95-b743-d7675ea52b92"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
