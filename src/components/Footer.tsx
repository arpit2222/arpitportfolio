"use client";

import { Code2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12 mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Code2 className="text-primary w-6 h-6" />
          <span className="font-bold text-lg tracking-tighter">Arpit.dev</span>
        </div>
        
        <p className="text-muted-foreground text-sm text-center md:text-left">
          © {new Date().getFullYear()} Arpit Chauhan. Building the future.
        </p>

        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="mailto:arpit@dehix.org" className="hover:text-primary transition-colors">
            arpit@dehix.org
          </Link>
        </div>
      </div>
    </footer>
  );
}
