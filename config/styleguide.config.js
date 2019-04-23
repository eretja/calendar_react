const path = require( 'path' );
const configFactory = require( './webpack.config' );
const config = configFactory( 'development' );
module.exports =
    config;
module.exports = {
    title: 'Calendar Style Guide',
    pagePerSection: false,
    components: '../src/components/*.{jsx}',

    webpackConfig: config,

    skipComponentsWithoutExample: false,

    exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
    usageMode: 'expand', // 'hide' | 'collapse' | 'expand',


    // propsParser: require('vue-docgen-typescript').parse,

    // template: {
    //     head: {
    //         links: [
    //             {
    //                 rel: 'stylesheet',
    //                 href:
    //                     '/dist/css/main.css'
    //             }
    //         ],
    //         // raw: '<style type="text/css">body {overflow: scroll}</style>'
    //     }
    // },


    sections: [
        {
            name: 'Modules',
            content: '../src/components/mod/mod.md',
            components: '../src/components/mod/**/*.jsx'
        },

        {
            name: 'Ui-Elements',
            content: '../src/components/ui/ui.md',
            // components: '../src/components/ui/**/*.jsx',
            sections: [
                {
                    name: 'Buttons',
                    components: '../src/components/ui/buttons**/*.jsx'
                },
                {
                    name: 'SVG',
                    components: '../src/components/ui/svg/**/*.jsx'
                },
                {
                    name: 'Form',
                    components: '../src/components/ui/form/**/*.jsx'
                }
            ]
        }

    ],

    ignore: [
        '../src/setupTests.js',
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*.test.js',
        '**/*.test.jsx'
    ]
};
