import React from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number; // milliseconds per character
  loopDelay?: number; // milliseconds to wait before restarting
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  text,
  speed = 50,
  loopDelay = 2000
}) => {
  const [displayedText, setDisplayedText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        // Start deleting after loopDelay
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, loopDelay);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, speed / 2); // Delete faster than typing
      } else {
        // Start typing again
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text, speed, loopDelay]);

  // Convert pipe characters to line breaks for display
  const formattedText = displayedText.split('|').map((line, index, arr) => (
    <React.Fragment key={index}>
      {line}
      {index < arr.length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div className="typewriter-container">
      <span className="typewriter-text">{formattedText}</span>
      <span className="typewriter-cursor">_</span>
    </div>
  );
};

export default TypeWriter;
