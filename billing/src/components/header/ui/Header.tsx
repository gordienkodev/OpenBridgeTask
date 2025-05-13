export const Header = ({ header, subheader }: { header: string; subheader: string }) => {
  return (
    <div className="max-w-[600px] flex flex-col gap-[12px] mx-[40px]">
<div className="text-gray-800 font-semibold text-[32px] leading-[125%] tracking-normal text-center font-sans">
        {header}
      </div>
      <div className="text-[16px] text-center font-sans">{subheader}</div>
    </div>
  );
};
