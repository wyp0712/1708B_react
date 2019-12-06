# JSX 奇怪的HTML JS

1. javascript 的语法 扩展
2. 可以使用花括号 {}
内嵌js表达式
3. jsx属性 data - index = "index" 自定义属性

jsx被编译为什么？

1. 它是一种语法糖 - React.createElement()
2. ReactElement 对象

# React生命周期介绍

生命周期包含哪些：

## Initialization

setup props and state

## Mounting
componentWillMount()
render()
componentDidMount()

## Updation

### props : componentWillReceiveProps()
shouldComponentUpdate()
true false
componentWillUpdate()
render()
componentDidUpdate()

### states : shouldComponentUpdate()
false

## Unmounting
componentWillUnmount() // 在组件从 DOM 中移除之前立刻被调用。 事件回收，清楚定时器

# 组件类型检测
import PropTypes from 'prop-types';

# 组件规范写法：

class App extends Component {
    // 声明成静态属性，意味着从类外面也可以访问他们。App.propTypes  App.defaultProps
    static propTypes = {}
    static defaultProps = {}
    constructor(props) {
        super(props)

        this.state = {}
    }

    // 组件初始化时候执行一次
    componentWillMount() {}

    componentDidMount() {}

    render() {}
}

# 组件：

Es6 class
无状态函数

React.createClass // 已经废弃

# props state 与render函数的关系
当组件的state或者props发生改变的时候，render函数就会被重新执行

# 项目目录划分：

public 放本地图片
src components
static reset.css iconfont
mock
index.js

# 受控组件和非受控组件：表单
input
textarea
select
checkbox

# htmlFor label 属性

# 设置html方式 dangerouslySetInnerHTML = {{__html: item}}

# 事件处理

注意：
1. 事件的命名采用驼峰命名方式，onchange要写成onChange等。
2. 处理事件的响应函数要以对象的形式赋值给事件属性，而不是DOM中的字符串形式。 {
    this.handleClick
}

return false;
e.preventDefault

## React中的事件是合成事件，并不是原生的DOM事件。React 根据W3C规范定义了一套兼容各个浏览器的事件对象。在DOM事件中，可以通过处理函数返回false来阻止事件的默认行为，但在React事件中，必须显式地调用事件对象的preventDefault 方法来阻止事件的默认行为。除了这一点外，DOM事件和React事件在使用上并无差别。如果在某些场景下必须使用DOM提供的原生事件，可以通过React事件对象的nativeEvent属性获取。

## 其实，在React组件中处理事件最容易出错的地方是事件处理函数中this 的指向问题，因为ES6 lass并不会为方法自动绑定this 到当前对象。

## React 事件处理函数的写法主要有三种方式，不同的写法解决this指向问题的方式也不同。

1. bind()绑定this指向 {this.handleClick}
调用
2. {
    () => this.handleClick
}
定义() => {
    this.handleClick
}
3. 属性初始化语法 : handleClick = () => {}

// react合成事件中，当采用属性初始化语法定义函数的时候，调用的时候，如果带上括号 浏览器会预执行这个函数 不传参数的情况下： 直接调用
// this.handClick 传参数的情况下：利用箭头函数去调用并且传参数

1. 使用箭头函数 （箭头函数中的this指向的是函数定义时候的对象，所以可以保证this总是指向当前组件的实例对象。）

直接在React元素中采用箭头函数定义事件的处理函数

// class不会为当前函数绑定this到当前对象
handleClick() {}() => this.handleClick()

2. this
    .handleClick
    .bind(this)返回一个函数，（加在事件元素上，不需要立即执行） call apply 立即执行没有返回值

3. 函数定义时候采用箭头函数形式 Es7语法：属性初始化语法

### 定义 共享父级作用域 指向当前对象
handleClick = () => {}

### 调用 - > 不传参数 < button onClick = {
    this.handleClick
} > </button>
### 调用 - > 传参数 < button onClick = {
    () => this.handleClick(index)
} > </button>

# mockjs
## 接口 get 匹配 post 匹配 ‘post’
## 参数 qs 支持es6模块化的一个包 querystring 只支持CommonJS模块化规范的包。require(‘querystring’)
## 模拟数据
const type = ['数据', '人口']
var data = Mock.mock({
    'list|10': [
        {
            "id|+1": 1,
            "username": '@ctitle',
            'password': '@word',
            'age|18-30': 1,
            'name': '@cname',
            'sex|1-1': true,
            'type|+1': type
        }
    ]
})

import qs from 'qs'
Mock.mock('/api/tab', 'post', function (options) {
    console.log(JSON.parse(options.body))
})
Mock.mock(/\.*/, function (res) {
    // console.log(res.url.split('?')[1])
    console.log(qs.parse(res.url.split('?')[1]), 'res')
})
Mock.mock('/api/tab', tabData)

# qs 是一个增加了一些安全性的查询字符串解析和序列化字符串的库。

qs.parse()
qs.stringify()

# ref 操作dom

## 在DOM元素上使用ref
ref接收一个回调函数作为值，在组件被挂载或卸载时候，回调函数会被调用，
1. 在组件被挂载时，回调函数会接收当前DOM元素作为参数；
2. 在组件被卸载时候，回调函数会接收null作为参数；

## 在组件上使用ref 获取组件实例
ref的回调函数接收的参数是当前 - 组件的实例 - ，这提供了一种在组件外部操作组件的方式。

## 注意：
新版本的React已经不推荐我们使用ref string转而使用ref callback
只能为类组件定义ref属性，而不能为函数组件定义ref属性，
需求，如果要在父组件中获取子组件的dom元素，可以采用inputRef 采用函数组件

一、
class AutoFocus extends Component {
    render() {
        return (
            <div>
                <input type="text" ref={this.props.inputRef}/>
            </div>
        )
    }
} < AutoFocus ref = {
    input => this.inputElement = input
} /> ref在组件上使用 获取的是组件实例 - 必须是class组件 如果不想在用class组件可以采用以下方法

二、
const AutoFocus = () => {
    return <div>
        <input type="text" ref={props.inputRef}/>
    </div>
} < AutoFocus inputRef = {
    el => this.inputElement = el
} /> # ReactDOM.findDOMNode 查找组件render中的所有的dom

# children 弹框
this.props.children < Dialog > <h1>
    hello world
</h1> < /Dialog>

# 组件通信之 兄弟组件通信 context 总结: Context跨级组件传值
   当两个组件不是父子关系但有相同的父组件时候，称为兄弟组件。这里的兄弟组件在整个组件树上并不一定处于同一层级。
  ## 项目需求: 数据在App.js中
    - App.js
      - List.js
        - Title.js

     数据在app.js中，要传输到title.js中，如果按平时的化，应该一级一级传入下去，

  ## utils.js
    import React from 'react'
    const Context = React.createContext()
    export default Context;

  ## App.js
    import React from 'react'
    import List from './components / List '
 import Context from './utils/index'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'hell react!'
        }
    }
    render() {
        return <div>
            <Context.Provider value={this.state.title}>
                <List></List>
            </Context.Provider>
        </div>
    }
}
export default App;

## List.js
import React from 'react'
import Title from './Title'
class List extends React.Component {
    render() {
        return <div>
            <Title></Title>
        </div>
    }
}

export default List
## Title.js
import React, {Component} from 'react'
import Context from '../utils/index'

class Title extends Component {
    render() {
        return <span>
            <Context.Consumer>
                {(val) => {
                    console.log(val, '我是app传下来的值')
                    return <h1>{val}</h1>
                }
}
            </Context.Consumer>
        </span>
    }
}
export default Title

1. 创建context对象 var context = React.createContext();
2. 传值的组件,
利用 Provider 组件传值,
值通过value属性指定;
注意 : 必须将需要接收值的组件包裹在Provider内,
这样所有内层组件都可以接收到这个value值. < Context.Provider value = {
    this.state.title
} > 
3. 接收值的组件,
利用Consumer 组件接收值,
内部是个函数 < Context.Consumer > {
    (value) => {
        console.log('Btn接收到了值:', value);
        /* 不能在这里用setState保存接收的value */
        /* 否则会死循环 */
        /* 对于接收到value,一般的处理方式: 立即渲染 */
        return (
            <h2>{value}</h2>
        );
    }
} < /Context.Consumer>
  

# 路由：
  ## 安装 yarn add react-router-dom ; npm install react-router-dom
  
  ## 创建文件夹 router  index.js
  import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

  ## 组件Home
    const Home = (props) => {
      return (
        <Fragment>
          <a href='/detail '>home-page</a>
    {/* <button onClick={ () => props.history.push('detail/1')   }>点击确定</button> */
    } < button onClick = {
        () => props
            .history
            .push({
                pathname: '/detail',
                state: {
                    id: 3
                }
            })
    } > 点击确定 < /button>
        </Fragment >)
    }

  ## detail
    class Detail extends Component {
      render() {
        return (
          <Fragment>
            <a href='/'>DETAIL-page</a>
          </Fragment>
        )
      }

      componentDidMount() {
        console.log(this.props.match.params, 'canshu ')
        console.log(this.props.history.location.state, 'location')
      }
    }

    class ReactRouter extends React.Component {
      render() {
        return (
          <Fragment>

            <nav>
              <span><Link to='/home '>首页</Link></span>
              <span><Link to='/detail'>详情页</Link> < /span>
            </nav>

            <Switch>
              <Route path='/home' component={Home}></Route>
              <Route path='/detail' component={Detail}></Route>
            </Switch> 
          </Fragment>
        )
      }
    }

    class App extends React.Component {
      render() {
        return (
          <BrowserRouter>
            <RouterApp / > 
          </BrowserRouter>)
      }
    }
    export default App;

 ## 嵌套路由
  
  嵌套路由是指在Route渲染的组件内部定义新的Route。在Posts组件内再定义两个route:

  const Posts = ({ match }) => {
      return (
          <div>
            {/* 这里的match.url等于/posts */}
            <Route path={`${match.url}/:id`} component={PostDetail}> </Route>
            <Route exact path={match.url} component={PostList}> </Route>
          </div>
      )
  }

  path= /posts/react
  path= /posts/vue
      


# match : 当url和Route匹配时候，Route会创建一个match对象作为props中的一个属性传递给被渲染的组件
   match: {
     params: 参数，
     isExact: 布尔值，完全匹配为true,部分匹配为false
     path:构建嵌套路由会使用到
     url: URL的匹配部分
   }

# component 
   component的值是一个组件，当url和Route匹配的时候，component属性定义的组件会被渲染，

   <Route path="/foo" component={Foo} > 

# render: 
  render的值是一个函数，这个函数返回一个React元素，这种方式可以方便的为待渲染的组件传递额外的属性。

  <Route path='foo' render={(props)=>{
    <Foo {...props} data={extraProps}>
  }} >    
  Foo组件接收了一个额外的属性。