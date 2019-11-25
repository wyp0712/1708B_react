# react

```
import React from 'react'

const Demo = () => {
  return (
    <div>sd</div>
  )
}


export default Demo
```

```
import React from 'react'

class List extends React.Component {
    render() {
        return (
        <div>sd<div>
        )
    }
}
export default List
```

第一种写法是无状态组件的写法。无状态组件只有props，没有state和一系列的生命周期函数。因此，无状态组件更新和渲染的速度比较快！如果你的组件没有state和生命周期控制的话，推荐使用这种书写方式！

第二种写法则是一般的react组件的书写方式，包括了props，state和一些列的生命周期函数。你可以对组件的状态进行和各生命周期进行控制。



无状态组件的特点：
（1）、组件不会被实例化，整体渲染性能得到提升
（2）、组件无法访问生命周期的方法