import { SectionTitle } from "@/components/sectionTitle";

export const SectionHeader = ({ header, subheader }: { header: string; subheader: string }) => {
  return (
    <div className="max-w-[600px] flex flex-col gap-[12px] mx-[40px]">
    <SectionTitle>{header}</SectionTitle>
      <div className="text-[16px] text-center font-sans">{subheader}</div>
    </div>
  );
};
