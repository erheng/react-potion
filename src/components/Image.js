import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  object-fit: cover;
  border-radius: 1px;
  ${({ maxWidth }) => maxWidth ? `max-width: ${typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth};` : ''}
`;

const ImageComponent = ({ src, ...props }) => {
  return (
    <Image src={src} {...props} />
  );
};

export default ImageComponent;
