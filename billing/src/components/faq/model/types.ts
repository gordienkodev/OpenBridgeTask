import { FaqItem } from '@/components/billing/model/types';

export interface FaqDataProps {
  faqData: FaqItem[];
  faqHeader: string;
  supportText: string;
  supportButtonText: string;
}

export interface FaqItemProps {
  question: string;
  answer: string;
}

export interface ContactSupportBlockProps {
  supportText: string;
  supportButtonText: string;
}
