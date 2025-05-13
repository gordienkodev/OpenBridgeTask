import { FaqItemProps } from "../model/types";

export const FaqItem = ({ question, answer }: FaqItemProps) => {
    return (
      <div className="max-w-[430px] my-4 flex flex-col gap-[20px]">
        <h3 className="text-lg font-semibold mb-2">{question}</h3>
        <p className="text-gray-700">{answer}</p>
      </div>
    );
  };