import React from 'react';
import PropTypes from 'prop-types';
import { ImgGalleryItem, ImgGalleryItemPic } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onSelect }) => {
  const { webformatURL, tags, largeImageURL } = image;

  const handleItemClick = () => {
    onSelect(webformatURL, largeImageURL);
  };

  return (
    <ImgGalleryItem onClick={() => handleItemClick()}>
      <ImgGalleryItemPic src={webformatURL} alt={tags} />
    </ImgGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
