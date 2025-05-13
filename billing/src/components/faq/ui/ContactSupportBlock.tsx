import { ContactSupportBlockProps } from '../model/types';
import { highlightLastWord } from '../utils/textUtils';

export const ContactSupportBlock = ({
  supportText,
  supportButtonText,
}: ContactSupportBlockProps) => {
  return (
    <div className="flex flex-row justify-between items-center self-stretch my-6 border border-neutral-200 bg-neutral-100 rounded-lg box-border">
      <div className="flex flex-row justify-start items-center pt-[13px] pb-[13px] gap-2.5 mx-2.5 text-center text-[22px] font-semibold text-[#262626] whitespace-nowrap">
        {highlightLastWord(supportText, '#069556')}
      </div>
      <button className="flex flex-row justify-center items-center p-2 px-3 mx-2.5 rounded-lg bg-[#069556] text-white text-[14px] shadow-[inset_0px_-2px_0px_0px_rgba(16,24,40,0.05)]">
        {supportButtonText}
      </button>
    </div>
  );
};
