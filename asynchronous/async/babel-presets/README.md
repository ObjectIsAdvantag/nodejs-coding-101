# Example with babel presets

Install the babel CLI and the preset for ES6 and you're good

```shell
> mkdir babel-presets
> cd babel-presets
> npm init -fy
> npm install --save-dev babel-cli 
> npm install --save-dev babel-preset-es2017
> cp ../request.js .
# manually update the scripts section with
#     "build": "babel request.js --presets es2017 -o request-babelized.js"
> npm run build
> node request-babelized.js
```