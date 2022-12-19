import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ author, body }) {
  return (
    <div>
      <div>
        Author:
        {author}
      </div>
      <div>
        Body:
        {body}
      </div>
    </div>
  );
}

Post.defaultProps = {
  author: 'Anonymous Author',
  body: '',
};

Post.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
};
