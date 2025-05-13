import { SectionHeader } from '@/components/sectionHeader';
import { Reviews } from '@/components/reviews';
import { Faq } from '@/components/faq';

import {
  billingHeader,
  subHeader,
  faqHeader,
  supportText,
  supportButtonText,
} from '../model/data.json';
import { billingReviewsMock, faqMock } from '../__mocks__/billing.mock';

export const Billing = () => {
  return (
    <div className="mt-16 px-[104px] max-w-[1440px] mx-auto">
      <SectionHeader billingHeader={billingHeader} subHeader={subHeader} />
      <Reviews billingReviewsData={billingReviewsMock} />
      <Faq
        faqData={faqMock}
        faqHeader={faqHeader}
        supportText={supportText}
        supportButtonText={supportButtonText}
      />
    </div>
  );
};
