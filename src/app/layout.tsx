// src/app/layout.js

import "./globals.css";

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body className="bg-gray-100 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="bg-blue-900 text-white shadow-md py-4">
          <div className="container mx-auto px-6 flex justify-center items-center">
            <h1 className="text-4xl font-bold">
              Raja Blogs
            </h1>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow py-8 container mx-auto px-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Raja Blogs. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
