import { SectionTitle } from '@/components/sectionTitle';
import { FaqItem } from './FaqItem';
import { ContactSupportBlock } from './ContactSupportBlock';

import { FaqDataProps } from '../model/types';
import { header, supportText, supportButtonText } from '../model/data.json';

export const Faq = ({ faqData }: FaqDataProps) => {
  return (
    <div className="max-w-[940px] mx-auto mt-16 px-4">
      <div className="flex flex-col items-center">
        <SectionTitle>{header}</SectionTitle>
        <div className="flex flex-wrap mt-6 gap-[16px]">
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <ContactSupportBlock
          supportText={supportText}
          supportButtonText={supportButtonText}
        />
      </div>
    </div>
  );
};
