'use client';
import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/profile.jpeg';

const ProfileCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="tools">
          <div className="circle">
            <span className="red box" />
          </div>
          <div className="circle">
            <span className="yellow box" />
          </div>
          <div className="circle">
            <span className="green box" />
          </div>
        </div>
        <div className="card__content">
          <div className="image-container">
            <img 
              src={profileImage.src}
              alt="Profile Photo"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 220px;
    height: 290px;
    margin: 0 auto;
    background-color: #F8FBFE;
    border-radius: 8px;
    z-index: 1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    
    @media (max-width: 768px) {
      width: 190px;
      height: 254px;
      margin-bottom: 2rem;
    }
  }

  .tools {
    display: flex;
    align-items: center;
    padding: 9px;
  }

  .circle {
    padding: 0 4px;
  }

  .box {
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 50%;
  }

  .red {
    background-color: #ff605c;
  }

  .yellow {
    background-color: #ffbd44;
  }

  .green {
    background-color: #00ca4e;
  }
  
  .card__content {
    padding: 10px;
    height: calc(100% - 40px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 4px;
  }
  
  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    transition: transform 0.3s ease;
  }
  
  .profile-image:hover {
    transform: scale(1.03);
  }
`;

export default ProfileCard;
