

import React from 'react';
import PropTypes from 'prop-types';
import styles from './eventBody.scss';


/**
 * General component description in JSDoc format. Markdown is *supported*.
 */


const EventBody = ()  => {

    return (
        <div className={styles.eventBody}> <h3>List of saved events:</h3>
     <div></div>
        
        
        </div>
       
      
    );
};


EventBody.propTypes = {
    /** Description of prop "text". */

    optionsState: PropTypes.string
};

EventBody.defaultProps = {
    text: 'defaultText'
};

export default EventBody;
