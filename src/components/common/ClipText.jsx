import { useState, useEffect } from 'react';

export const ClipWords = ({
  text,
  isReady = true,
  baseDelay = 0,
  stagger = 120,
  className = '',
  wordClassName = ''
}) => {
  const [revealed, setRevealed] = useState(false);
  const words = text.split(' ');

  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => {
        setRevealed(true);
      }, baseDelay);
      return () => clearTimeout(timer);
    }
  }, [isReady, baseDelay]);

  return (
    <span className={className}>
      {words.map((word, idx) => (
        <span key={idx} className="clip-hide mr-[0.25em] last:mr-0">
          <span
            className={`clip-word ${wordClassName} ${revealed ? 'revealed' : ''}`}
            style={{
              transitionDelay: `${idx * stagger}ms`
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
};

export const ClipLines = ({
  lines = [],
  isReady = true,
  baseDelay = 350,
  stagger = 110,
  className = '',
  lineClassName = ''
}) => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => {
        setRevealed(true);
      }, baseDelay);
      return () => clearTimeout(timer);
    }
  }, [isReady, baseDelay]);

  return (
    <div className={className}>
      {lines.map((line, idx) => (
        <span key={idx} className="clip-hide block">
          <span
            className={`clip-line ${lineClassName} ${revealed ? 'revealed' : ''}`}
            style={{
              transitionDelay: `${idx * stagger}ms`
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </div>
  );
};

