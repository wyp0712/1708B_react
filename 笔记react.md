# JSX 奇怪的HTML

1. javascript 的语法 扩展
2. 可以使用花括号 {} 内嵌js表达式
3. jsx属性


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

  React.createClass  // 已经废弃
  Es6 class
  无状态函数

# props state  与render函数的关系
  当组件的state或者props发生改变的时候，render函数就会被重新执行
