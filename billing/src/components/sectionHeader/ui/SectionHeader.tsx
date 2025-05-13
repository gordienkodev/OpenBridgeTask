import { SectionTitle } from '@/components/sectionTitle';
import { SectionHeaderProps } from '../model/types';

export const SectionHeader = ({
  billingHeader,
  subHeader,
}: SectionHeaderProps) => {
  return (
    <div className="max-w-[600px] flex flex-col gap-[12px] mx-[40px]">
      <SectionTitle>{billingHeader}</SectionTitle>
      <div className="text-[16px] text-center font-sans">{subHeader}</div>
    </div>
  );
};
