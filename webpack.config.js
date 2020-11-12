module.exports = {
    entry : [
        './src/index.js'  //entry point to our app, where webpack should look into
    ],

    output: {
        path : __dirname + '/dist', //where the output should be placed
        publicPath: '/',         //relative path of the output
        filename : 'bundle.js'   //filename of the output 
    },

    devServer : {
        contentBase: './dist'    //tells the dev server where to serve the content from
    },

    module: {
        rules : [
            {
            test : /\.(js|jsx)$/,   //on all js and jsx files
            exclude: /node_modules/,  //ignore mode modules
            use : ['babel-loader']
        },
        {
            test : /\.(js|jsx)$/,   //on all js and jsx files
            exclude: /node_modules/,  //ignore mode modules
            use : ['eslint-loader']

        }
    ]
    },
    // resolve: {
    //     extensions: ['.js', '.jsx']    //make the adding of js extension when requiring a file unnecessary
    // }
}