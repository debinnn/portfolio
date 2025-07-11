'use client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LoadingAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show loading for 3 seconds total
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <LoadingOverlay>
      <StyledWrapper>
        <div className="card">
          <div className="wrap">
            <div className="terminal">
              <hgroup className="head">
                <p className="title">
                  <svg width="16px" height="16px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none">
                    <path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" />
                  </svg>
                  Terminal
                </p>
              </hgroup>
              <div className="body">
                <pre className="pre">
                  <code>$&nbsp;</code>
                  <code className="cmd" data-cmd="npm run dev" />
                </pre>
              </div>
            </div>
          </div>
        </div>
      </StyledWrapper>
    </LoadingOverlay>
  );
};

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeOut 0.5s ease-out 2.5s forwards;

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const StyledWrapper = styled.div`
  transform: scale(1.2);
  animation: popIn 0.5s ease-out 0.2s both;

  @keyframes popIn {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1.2);
      opacity: 1;
    }
  }

  .card {
    padding: 1rem;
    overflow: hidden;
    border: 1px solid #c5c5c5;
    border-radius: 12px;
    background-color: #d9d9d92f;
    backdrop-filter: blur(8px);
    min-width: 344px;
    
    @media (max-width: 768px) {
      min-width: 300px;
      max-width: 100%;
    }
  }
  .wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    z-index: 10;
    border: 0.5px solid #525252;
    border-radius: 8px;
    overflow: hidden;
  }
  .terminal {
    display: flex;
    flex-direction: column;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    min-height: 40px;
    padding-inline: 12px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #202425;
  }
  .title {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 2.5rem;
    user-select: none;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #8e8e8e;
  }
  .title > svg {
    height: 18px;
    width: 18px;
    margin-top: 2px;
    color: #006adc;
  }
  .body {
    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    overflow-x: auto;
    padding: 1rem;
    line-height: 19px;
    color: white;
    background-color: black;
    white-space: nowrap;
  }
  .pre {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-wrap: nowrap;
    white-space: pre;
    background-color: transparent;
    overflow: hidden;
    box-sizing: border-box;
    font-size: 16px;
  }
  .pre code:nth-child(1) {
    color: #575757;
  }
  .pre code:nth-child(2) {
    color: #e34ba9;
  }
  .cmd {
    height: 19px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .cmd::before {
    content: attr(data-cmd);
    position: relative;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    background-color: transparent;
    width: 0;
    animation: typeWriter 2s steps(11) forwards;
  }
  .cmd::after {
    content: "";
    position: relative;
    display: block;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
    border-right: 0.15em solid #e34ba9;
    animation: cursor 0.5s step-end infinite alternate;
  }

  @keyframes cursor {
    50% {
      border-right-color: transparent;
    }
  }
  @keyframes typeWriter {
    0% {
      width: 0;
    }
    100% {
      width: 100px;
    }
  }
`;

export default LoadingAnimation;
