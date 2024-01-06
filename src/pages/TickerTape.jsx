// TickerTape.jsx
import React from 'react';
import '../style/TickerTape.css';

const TickerTape = ({ messages }) => {
  return (
    <div className="ticker">
      <div className="ticker-content">
        {messages.map((message, index) => (
          <span key={index}>
            {message.url ? (
              <a href={message.url} target="_blank" rel="noopener noreferrer">
                {message.text}
              </a>
            ) : (
              message.text
            )}
            &nbsp; • &nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerTape;
