import React from 'react';

export interface ImageSlideshowProps {
  images: string[];
  alt: string;
  className?: string;
  imageClassName?: string;
  interval?: number;
}

export interface TimeWidgetProps {
  className?: string;
}

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export interface BlurRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export interface SlideRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  className?: string;
}
