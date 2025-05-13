export const highlightLastWord = (text: string, highlightColor: string) => {
  const words = text.split(' ');
  if (words.length > 1) {
    const lastWord = words.pop();
    return (
      <>
        {words.join(' ')}{' '}
        <span className={`text-[${highlightColor}]`}>{lastWord}</span>
      </>
    );
  }
  return text;
};
