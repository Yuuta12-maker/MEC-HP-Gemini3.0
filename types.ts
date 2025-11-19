import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricePlan {
  title: string;
  price: string;
  period?: string;
  features: string[];
  isPrimary: boolean;
  note?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}