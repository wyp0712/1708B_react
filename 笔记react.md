# JSX 奇怪的HTML  JS

1. javascript 的语法 扩展
2. 可以使用花括号 {} 内嵌js表达式
3. jsx属性  data-index="index"   自定义属性


jsx被编译为什么？

1. 它是一种语法糖- React.createElement()
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

  ### props: 
  componentWillReceiveProps() 
  shouldComponentUpdate()
  true           false
  componentWillUpdate()
  render()
  componentDidUpdate()

  ### states: 
  shouldComponentUpdate()
  false

## Unmounting
componentWillUnmount() // 在组件从 DOM 中移除之前立刻被调用。 事件回收，清楚定时器



# 组件类型检测
  import PropTypes from 'prop-types';


# 组件规范写法：

 class App extends Component {
    // 声明成静态属性，意味着从类外面也可以访问他们。App.propTypes  App.defaultProps
    static propTypes = {
    }
    static defaultProps = {
    }
    constructor(props) {
      super(props)

      this.state = {

      }
    }

    // 组件初始化时候执行一次 
    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {

    }
  }

# 组件：

 
  Es6 class  
  无状态函数 

  React.createClass  // 已经废弃


# props state  与render函数的关系
  当组件的state或者props发生改变的时候，render函数就会被重新执行


# 项目目录划分：

  public  放本地图片
  src     components
          static  reset.css iconfont
          mock
          index.js

# 受控组件和非受控组件：表单
  input
  textarea
  select
  checkbox

# htmlFor label 属性

# 设置html方式 dangerouslySetInnerHTML={{__html: item}}

# 事件处理

  注意：
  1. 事件的命名采用驼峰命名方式，onchange要写成onChange等。
  2. 处理事件的响应函数要以对象的形式赋值给事件属性，而不是DOM中的字符串形式。{this.handleClick}

  return false;
  e.preventDefault

  ##  React中的事件是合成事件，并不是原生的DOM事件。React 根据W3C规范定义了一套兼容各个浏览器的事件对象。在DOM事件中，可以通过处理函数返回false来阻止事件的默认行为，但在React事件中，必须显式地调用事件对象的preventDefault 方法来阻止事件的默认行为。除了这一点外，DOM事件和React事件在使用上并无差别。如果在某些场景下必须使用DOM提供的原生事件，可以通过React事件对象的nativeEvent属性获取。

  ## 其实，在React组件中处理事件最容易出错的地方是事件处理函数中this 的指向问题，因为ES6 lass并不会为方法自动绑定this 到当前对象。

  ## React 事件处理函数的写法主要有三种方式，不同的写法解决this指向问题的方式也不同。

    1. bind() 绑定this指向 { this.handleClick }  调用
    2. { () =>  this.handleClick } 定义  () => { this.handleClick }
    3. 属性初始化语法: 
      handleClick = () => {
          
      }

    // react合成事件中，当采用属性初始化语法定义函数的时候，调用的时候，如果带上括号 浏览器会预执行这个函数
   // 不传参数的情况下： 直接调用 this.handClick
   // 传参数的情况下：利用箭头函数去调用并且传参数
   


  1. 使用箭头函数 （箭头函数中的this指向的是函数定义时候的对象，所以可以保证this总是指向当前组件的实例对象。）

    直接在React元素中采用箭头函数定义事件的处理函数

    // class不会为当前函数绑定this到当前对象  
    handleClick() {

    }

    () => this.handleClick()

  2. this.handleClick.bind(this) 返回一个函数，（加在事件元素上，不需要立即执行） call apply 立即执行没有返回值

  3. 函数定义时候采用箭头函数形式 Es7语法：属性初始化语法

      ### 定义 共享父级作用域 指向当前对象
     handleClick = () => {}

     ### 调用 -> 不传参数
     <button onClick={ this.handleClick } ></button>
     ### 调用 -> 传参数
     <button onClick={ () => this.handleClick(index) } ></button>



# mockjs
  ## 接口 get 匹配  post 匹配   ‘post’
  ## 参数  qs 支持es6模块化的一个包  querystring 只支持CommonJS模块化规范的包。require(‘querystring’)
  ## 模拟数据
      const type = ['数据', '人口']
      var data = Mock.mock({
        'list|10': [{
          "id|+1": 1,
          "username": '@ctitle',
          'password': '@word',
          'age|18-30': 1,
          'name': '@cname',
          'sex|1-1': true,
          'type|+1': type
        }]
      })

    import qs from 'qs'
    Mock.mock('/api/tab', 'post', function(options) {
      console.log(JSON.parse(options.body))
    })
    Mock.mock(/\.*/, function(res){
      // console.log(res.url.split('?')[1])
      console.log(qs.parse(res.url.split('?')[1]), 'res')
    })
    Mock.mock('/api/tab', tabData)
# qs 是一个增加了一些安全性的查询字符串解析和序列化字符串的库。

  qs.parse()
  qs.stringify()


# ref 
# reactDom.findDOMNode
# children   弹框