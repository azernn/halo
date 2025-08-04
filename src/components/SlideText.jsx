function SlideText() {
  const messages = [
    "LEVERING INDEN FOR 1-3 HVERDAGE",
    "■",
    "FRI FRAGT PÅ ORDRER OVER 400 DKK",
    "■"
  ];

  // Mesaj blokunu yaratırıq: • MESAJ şəklində span
  const messageBlock = messages.map((msg) => (
    <span  className="message-item">
       {msg}
    </span>
  ));

  const repeatedBlocks = Array(10).fill(messageBlock).flat();

  return (
    <div className="headerTop flex border-b border-[#dfdfdf] " >
      <div className="scrolling-text-wrapper w-full overflow-hidden bg-white">
        <div className="scrolling-text flex whitespace-nowrap animate-scroll">
          {repeatedBlocks}
        </div>
      </div>
    </div>
  );
}

export default SlideText;
