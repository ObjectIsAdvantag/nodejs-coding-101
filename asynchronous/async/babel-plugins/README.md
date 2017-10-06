# Example with babel presets

Install the babel CLI and the preset for ES6 and you're good

```shell
> mkdir babel-plugins
> cd babel-puugins
> npm init -fy
> npm install --save-dev babel-cli 
> npm install --save-dev babel-plugin-transform-async-to-generator
> cp ../request.js .
# manually update the scripts section with
#     "build": "babel request.js --plugins transform-async-to-generator -o request-babelized.js"
> npm run build
> node request-babelized.js
```