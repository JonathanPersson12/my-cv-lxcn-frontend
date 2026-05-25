// src/app/layout.js
import "./globals.css";

export const metadata = { title: "CV" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
