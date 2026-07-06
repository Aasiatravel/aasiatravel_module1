import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { siteConfig } from '@/config/site';
import {
  footerCompanyLinks,
  footerSupportLinks,
  footerSocialLinks,
  footerContactInfo,
} from '@/data/home';
import { getWhatsAppChatSupportLink, getWhatsAppGetInTouchLink } from '@/lib/whatsapp';

export default function Footer() {
  const fontStyle = { fontFamily: 'var(--font-inter), sans-serif' };

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-primary-soft/30" style={fontStyle}>
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-8">
          <div className="flex flex-col items-start">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={140}
              height={50}
              className="h-10 w-auto object-contain mb-5"
              style={{ width: 'auto', height: 'auto' }}
            />
            <p className="text-primary-muted text-sm leading-relaxed mb-6 max-w-xs font-normal">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {footerSocialLinks.map((social) => {
                const Icon = { Facebook, Instagram, Youtube }[social.iconName];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-8 h-8 rounded-full border border-primary-light/50 text-primary-light/80 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4
              className="text-xs font-bold mb-3 tracking-[0.2em] text-primary-light uppercase"
              style={fontStyle}
            >
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerCompanyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-muted hover:text-primary transition-colors font-normal hover-underline pb-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs font-bold mb-3 tracking-[0.2em] text-primary-light uppercase"
              style={fontStyle}
            >
              SUPPORT
            </h4>
            <ul className="space-y-3">
              {footerSupportLinks.map((link) => {
                const isChatSupport = link.label === 'Chat Support';
                const href = isChatSupport ? getWhatsAppChatSupportLink() : link.href;
                return (
                  <li key={link.label}>
                    <a
                      href={href}
                      target={isChatSupport ? '_blank' : undefined}
                      rel={isChatSupport ? 'noopener noreferrer' : undefined}
                      className="text-sm text-primary-muted hover:text-primary transition-colors font-normal hover-underline pb-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs font-bold mb-3 tracking-[0.2em] text-primary-light uppercase"
              style={fontStyle}
            >
              CONTACT US
            </h4>
            <ul className="space-y-4">
              {footerContactInfo.map((item, idx) => {
                const Icon = { Mail, Phone, MapPin }[item.iconName];
                const isPhone = item.iconName === 'Phone';
                const isMail = item.iconName === 'Mail';

                let content = <span>{item.text}</span>;
                if (isPhone) {
                  content = (
                    <a
                      href={getWhatsAppGetInTouchLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      {item.text}
                    </a>
                  );
                } else if (isMail) {
                  content = (
                    <a
                      href={`mailto:${item.text}`}
                      className="hover:text-primary transition-colors"
                    >
                      {item.text}
                    </a>
                  );
                }

                return (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-primary-muted font-normal"
                  >
                    <Icon size={16} className="text-primary-light shrink-0" />
                    {content}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-soft flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs font-light text-center sm:text-left">
          <p className="text-primary-light/80 text-[12px]">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
          <a
            href="https://aadityag975pf.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-light/80 text-[12px] hover:text-primary hover:underline transition-colors"
          >
            Developed by Aaditya Gunjal
          </a>
        </div>
      </div>
    </footer>
  );
}
