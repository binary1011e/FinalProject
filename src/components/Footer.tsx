// src/components/Footer.tsx
export default function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer className="bg-gray-100 dark:bg-gray-900 text-center py-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {year} Your Name
        </p>
      </footer>
    );
  }
  