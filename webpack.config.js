const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
    SRC: path.join(__dirname, '/src'),
    DIST: path.join(__dirname, '/dist'),
    FONTS: path.join(__dirname, '/dist/fonts'),
    ASSETS: path.join(__dirname, '/assets')
};
const fontsPath = 'assets/fonts';


module.exports = {
    externals: {
        paths: PATH
    },
    entry: {
        main: path.join(PATH.SRC, 'index.tsx')
    },
    output: {
        path: PATH.DIST,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            assets: path.resolve(PATH.ASSETS),
            src: path.resolve(PATH.SRC)
        }
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.(sa|sc|c)ss$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: true,
                        reloadAll: true
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true
                    }
                },
                'postcss-loader',
                {
                    loader: 'sass-loader',
                }
            ]
        },
            {
                test: /\.(sa|sc|c)ss$/,
                include: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: false
                        }
                    }
                ]
            }, {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader:'url-loader?limit=100000',
                        options: {
                            name: '../fonts/[name].[ext]'
                        }
                    }
                ]
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {name: 'assets/img/[name].[ext]'}
                    }
                ]
            }]
    },
    devServer: {
        compress: true,
        hot: true,
        https: false,
        open: true,
        port: 3001,
        overlay: {
            warnings: true,
            errors: true
        },
        stats: {
            colors: true
        },
        historyApiFallback: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name].css`,
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: `${PATH.SRC}/index.html`
        })
    ]
};
