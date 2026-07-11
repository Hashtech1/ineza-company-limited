import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export const Footer = () => (
  <footer className="mt-24 border-t border-ink/10 bg-ink text-bone">
    <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <img src="/logo.svg" alt="Ineza" className="h-9 w-9" />
          <span className="font-display text-lg font-semibold">Ineza Co. Ltd</span>
        </div>
        <p className="text-sm text-bone/60">
          Building dependable teams and fleets across Rwanda, one careful hire at a time.
        </p>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-bone/50">Company</h4>
        <ul className="space-y-2.5 text-sm text-bone/70">
          <li><Link to={ROUTES.ABOUT} className="hover:text-bone">About us</Link></li>
          <li><Link to={ROUTES.SERVICES} className="hover:text-bone">Services</Link></li>
          <li><Link to={ROUTES.JOBS} className="hover:text-bone">Careers</Link></li>
          <li><Link to={ROUTES.CONTACT} className="hover:text-bone">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-bone/50">Contact</h4>
        <ul className="space-y-2.5 text-sm text-bone/70">
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Kigali, Rwanda</li>
          <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +250 788 000 000</li>
          <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@ineza.rw</li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-bone/50">Follow</h4>
        <div className="flex gap-3">
          <a href="#" aria-label="Facebook" className="rounded-full bg-bone/10 p-2 hover:bg-bone/20"><Facebook className="h-4 w-4" /></a>
          <a href="#" aria-label="Twitter" className="rounded-full bg-bone/10 p-2 hover:bg-bone/20"><Twitter className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn" className="rounded-full bg-bone/10 p-2 hover:bg-bone/20"><Linkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-bone/10 py-5 text-center text-xs text-bone/50">
      © {new Date().getFullYear()} Ineza Company Limited. All rights reserved.
    </div>
  </footer>
);
