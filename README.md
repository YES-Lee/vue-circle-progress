# circle-progress

## usage

### examples

* [https://yes-lee.github.io/vue-circle-progress](https://yes-lee.github.io/vue-circle-progress/)

### install
```bash
npm install @my-script/vue-circle-progress
```
or
```bash
yarn add @my-script/vue-circle-progress
```

### use
```html
<circle-progress :value="50" :duration="1000" bar-color="#00bcd4" bar-round />
```

## props

|name|type|description|
|---|---|---|
|value|Number|percent, 0~100|
|duration|Number|duration of animate|
|barColor|String|color of progress bar|
|barWidth|Number|width of progress bar|
|bgBarColor|String|color of background|
|bar-round|Boolean|set `stroke-linecap` to `round`|