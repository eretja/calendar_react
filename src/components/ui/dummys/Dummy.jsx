import React from 'react';
import PropTypes from 'prop-types';
import styles from './dummy.scss';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Dummy = ( { text } ) => (
    <div className={styles.test}>
        { text }
    </div>
);

Dummy.propTypes = {
    /** Description of prop "text". */
    text: PropTypes.string
};

Dummy.defaultProps = {
    text: 'defaultText'
};

export default Dummy;
