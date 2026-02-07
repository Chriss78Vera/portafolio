import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import React from 'react';
export function Footer() {
  return (
    <footer className="py-8 border-t border-purple-500/20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © 2026 Christopher Vera. Hecho con <Heart size={16} className="text-purple-400" /> por CV
          </p>
        </div>
      </div>
    </footer>
  );
}
