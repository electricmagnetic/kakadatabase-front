import placeholderThumbnail from '../../../../assets/img/placeholderThumbnail.png';
import placeholderLarge from '../../../../assets/img/placeholderLarge.png';

/**
  Provides appropriate image link for a bird profile or a placeholder.
  Protects against invalid size types.
  */
const getPicture = (bird, size = 'thumbnail') => {
  const placeholders = {
    thumbnail: placeholderThumbnail,
    large: placeholderLarge,
    default: placeholderThumbnail,
  };
  const { profile } = bird;

  if (profile && profile.picture) return profile.picture[size] || placeholders['default'];
  else return placeholders[size] || placeholders['default'];
};

export default getPicture;
