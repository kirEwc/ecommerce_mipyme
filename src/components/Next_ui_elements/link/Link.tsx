// components/CustomLink.tsx
import React from 'react';
import { Link as NextUILink } from '@nextui-org/react';
import { LinkUi } from '@/icons/Icons';


interface CustomLinkProps {
  href: string;
  text: string; 
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, text, className }) => {
  return (
    <NextUILink
      isExternal
      showAnchorIcon
      href={href}
      anchorIcon={<LinkUi/>}
      className={className}
    >
      {text}
    </NextUILink>
  );
};

export default CustomLink;
