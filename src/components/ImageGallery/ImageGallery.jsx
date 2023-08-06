import React from 'react';
import PropTypes from 'prop-types';
import { ImageGallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/';

const ImgGallery = ({ images, onSelect }) => {
  return (
    <ImageGallery>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onSelect={onSelect} />
      ))}
    </ImageGallery>
  );
};

ImgGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ImgGallery;
