import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

const BtnLoadMore = ({ onBtnClick }) => {
  return <LoadMoreBtn onClick={onBtnClick}>Load More</LoadMoreBtn>;
};

export default BtnLoadMore;

BtnLoadMore.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
