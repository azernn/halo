import { v4 as uuidv4 } from 'uuid'

function SlideText() {
  const messages = [
    "LEVERING INDEN FOR 1-3 HVERDAGE",
    "■",
    "FRI FRAGT PÅ ORDRER OVER 400 DKK",
    "■"
  ];

  // Təkrarlama + key generation burada edilir
  const repeatedBlocks = Array(10).fill(null).flatMap(() =>
    messages.map(msg => (
      <p key={uuidv4()} className="message-item">
        <span>{msg}</span>
      </p>
    ))
  );

  return (
    <div className="headerTop flex border-b border-[#dfdfdf]">
      <div className="scrolling-text-wrapper w-full overflow-hidden bg-white">
        <div className="scrolling-text flex whitespace-nowrap animate-scroll">
          {repeatedBlocks}
        </div>
      </div>
    </div>
  );
}

export default SlideText;
