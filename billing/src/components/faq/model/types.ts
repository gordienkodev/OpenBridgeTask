import { FaqProps } from "@/components/billing/model/types";

export interface FaqDataProps {
    faqData: FaqProps[]
}

export interface FaqItemProps {
    question: string;
    answer: string;
};

export interface ContactSupportBlockProps {
    supportText: string;
    supportButtonText: string;
}