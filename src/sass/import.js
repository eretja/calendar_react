const path = require( 'path' );

const resources = [
    'variables/breakpoints.scss',
    'variables/colors.scss',
    'variables/grid.scss' ];
// const resources =['variables.scss'];
// const resources =['variables/variables.scss'];


module.exports = resources.map( file => path.resolve( __dirname, file ) );
