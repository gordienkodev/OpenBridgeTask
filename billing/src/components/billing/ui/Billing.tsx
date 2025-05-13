import { Header } from '@/components/header';
import { Reviews } from '@/components/reviews';
import { FAQ } from '@/components/faq';

import {header, subheader} from '../model/data.json';
import { billingReviewsMock, faqMock } from '../__mocks__/billing.mock';

export const Billing = () => {
  return (
<div className="mt-16 px-[104px]">
        <Header header={header} subheader={subheader}/>
        <Reviews billingReviewsData={billingReviewsMock}/>
        <FAQ faqData={faqMock}/>
    </div>
  )
}
