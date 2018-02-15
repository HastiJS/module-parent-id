# Module Parent ID

> Get ID of module parent

Useful when you want to get the ID (filename) of module parent.

## Install

```
$ npm install module-parent-id --save
```

## Know more

Assume that we have two nested modules into `/home/hastijs` directory. That means we require module two into module one.

```
/home/hastijs/
|_ module-one.js
   |_ module-two.js
```

Now we run `module-one` while `module-parent-id` called into `module-two`.

```js
// module-tow.js
console.log(require('module-parent-id')());
```

The result is:

```js
//=> /home/hastijs/module-one.js
```

## Usage

In example bellow, **module-one** executed.

### Get module immediate parent ID

```js
// module-two.js (path: /home/hastijs/module-two.js)
const moduleParentId = require('module-parent-id');
console.log(moduleParentId());
```

```js
// module-one.js (path: /home/hastijs/module-one.js)
require('./module-two');
//=> /home/hastijs/module-one.js
```

### Get module upper parent ID

```js
// module-three.js (path: /home/hastijs/module-three.js)
const moduleParentId = require('module-parent-id');
console.log(moduleParentId(2));
```

```js
// module-two.js (path: /home/hastijs/module-two.js)
require('./module-three');
```

```js
// module-one.js (path: /home/hastijs/module-one.js)
require('./module-two');
//=> /home/hastijs/module-one.js
```

## API

### moduleParentId(upLevel)

#### upLevel

Type: `number`

Default: `1`

Number of upper parent.

## Contributing

Everyone is very welcome to contribute to Module Parent ID project. Module Parent ID is a HastiJS project so please see [HastiJS contributing guidelines](https://github.com/HastiJS/contributing) before contributing.

## License

MIT © [HastiJS](https://github.com/HastiJS)
