# Vue Loading Component (Testing)

> A simple Vue Loading Component

## Install

``` bash
npm i -s vue-loading-comp
```

## Usage

Import the component, 

``` bash
import VueLoading from 'vue-loading-comp'
```

Then, register the component

``` bash
export default {
  ...
  components: {
    VueLoading,
    ...
  },
  ...
}
```

## Setting the text

It is possible to customize the text by setting attribute "text", say

``` bash
<vue-loading text="読み込み中" />
```

