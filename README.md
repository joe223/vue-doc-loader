# vue-doc-loader

## usage

- vue-loader config
```javascript
{
  test: /\.vue$/,
  use: [
    {
      loader: 'vue-loader',
      options: {
        loaders: {
          docs: 'vue-doc-loader'
        },
      }
    },
  ]
}
```

- In `.vue` file
![source](https://github.com/joe223/vue2-doc-loader/raw/master/source.png)

- Something show below
![demo](https://github.com/joe223/vue2-doc-loader/raw/master/demo.png)
