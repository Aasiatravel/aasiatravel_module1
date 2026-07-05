import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-8 border-t border-primary/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={160}
              height={64}
              className="h-16 w-auto object-contain mb-8"
              style={{ width: 'auto', height: 'auto' }}
            />
            <p className="text-primary-light text-sm leading-relaxed mb-8 max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex gap-6">
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="text-primary-light hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="text-primary-light hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteConfig.social.youtube}
                aria-label="Youtube"
                className="text-primary-light hover:text-primary transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-8 tracking-widest text-primary-light uppercase">
              COMPANY
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-primary-light hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-primary-light hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-primary-light hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-8 tracking-widest text-primary-light uppercase">
              SUPPORT
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-primary-light hover:text-primary transition-colors">
                  Chat Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8 tracking-widest text-primary-light uppercase">
              CONTACT US
            </h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-3 text-primary-light">
                <Mail size={18} />
                <span>{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-center gap-3 text-primary-light">
                <Phone size={18} />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-primary-light">
                <MapPin size={18} />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-light text-sm">
          <p>Copyright © {new Date().getFullYear()}</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
