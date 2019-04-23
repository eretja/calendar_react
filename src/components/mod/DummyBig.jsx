import React from 'react';
import PropTypes from 'prop-types';
// import Dummy from '../ui/dummys/Dummy';
import Dummy from 'ui/dummys/Dummy';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */

var test =  '';

const DummyBig = ( text ) => (
    <>
        DUMMYBIG
        <Dummy text="text" />

    </>

);


DummyBig.propTypes = {
    /** Description of prop "text". */
    text: PropTypes.string
};

DummyBig.defaultProps = {
    text: 'defaultText'
};

export default DummyBig;
