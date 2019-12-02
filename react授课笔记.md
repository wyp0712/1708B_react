
# day1 react 第一天授课内容
  ## react 简介

  ## 虚拟dom
  用js对象去表示一段dom元素

  App  -----改变（事件触发）--------> DOM

  App  ----改变（事件触发）--> Virtual DOM ------改变（事件触发）-------> DOM

  
    DOM操作非常昂贵，我们都知道，在前端开发中，性能消耗最大的就是DOM操作，而且这部分代码会让整体项目的代码变得难以维护。

    React把真实的DOM树转换成JavaScript对象树，也就是虚拟DOM(Virtual DOM);
    每次数据更新后，重新计算Virtual DOM，并和上一次生成Virtual DOM树做对比，对发生变化的部分做批量更新，React也提供了直观的shouldComponentUpdate生命周期回调，来减少数据变化后不必要的虚拟dom对比过程，以保证性能。

    我们说虚拟dom提升了React的性能，但这并不是React的唯一亮点。此外，VirtualDOM 的渲染方式也比传统DOM操作好
    一些，但是并不明显，因为对比DOM节点也需要计算资源的。

    它最大的好处其实还在于方便和其他平台集成，比如react-native是基于虚拟dom渲染出原生控件，因为react组件可以映射为对应的原生控件。在输出的时候，是输出web DOm, 还是android控件，还是ios控件，就由平台本身决定了，因此，react-native有一个口号，----learn Once,  write Anywhere


  # jsx由来：

    react是用过创建与更新虚拟元素来管理整个虚拟dom的。

    其中，虚拟元素可以理解为真实元素的对应，它的构建与更新都是在内存中完成的，并不会真正渲染到页面dom中去。在react中创建的虚拟元素可以分为两类: DOM元素(DOM element)与组件元素（component element)，分别对应着原生DOM元素与自定义元素，而JSX与创建元素的过程有着莫大的关联。

    DOM元素

    组件元素

  ## JSX语法：
  1. 概念：JSX语法即JS和html的混合体，实际的核⼼心逻辑就是⽤用js去实现的
     # 定义标签时候，只允许一个标签包裹
     # 标签一定要闭合
        dom元素对应小写首字母
        组件元素对应大写首字母
     # 注释
       { /*  */ }
     # 属性
      class -> className
      for   -> htmlFor

      const DangerButton = ({ text }) => (
        <div className="a">
          {text}
        </div>
      )
      const Button = ({ color, text }) => (
        <div></div>
      )
      const DeleteAccount = function DeleteAccount() {
        return React.createElement(
          'div', null,
          React.createElement('p', null, 'Are You sure?'),
          React.createElement(Button, { color: 'blue' }, 'Cancel'),
          React.createElement(DangerButton, {text: 'Confirm'}, 'Confirm?'),
        )
      }
      ReactDOM.render(
        <DeleteAccount />
        , document.getElementById('root')
      )

    常⻅见的代码如下：
    ReactDOM.render(<App/>,document.getElementById('root'))
    JSX的实质就是React.createElement的调⽤用

    我们react⾥里里的写法：
    class HelloMessage extends React.Component {
      render() {
        return (
          <div>
            Hello {this.props.name}
          </div>
        )
      }
    }
    ReactDOM.render(
      <HelloMessage name="Taylor" />,
      document.getElementById('hello-example')
    );

    JSX实际的写法：
    class HelloMessage extends React.Component {
      render() {
        return React.createElement(
          "div",
          null,
          "Hello ",
          this.props.name
        )
      }
    }
    ReactDOM.render(React.createElement(HelloMessage, {name: "Taylor" }), 
    document.getElementById('hello-example'));



  ## 生成react脚手架项目方式  第一种或者第二种 （推荐第二种方式生成）
  1. 通过全局安装create-react-app 生成项目 
    ### windows:
    全局安装
    npm install create-react-app -g 
    ### Mac: 
    sudo npm install create-react-app -g
    ### 检测版本号码：
    create-react-app --version
    3.2.0
    ### 生成项目
    在终端命令中输入一下命令：
    create-react-app <project-name>

  2. 通过npx生成；（推荐方式）
    ### 在终端中输入以下命令
    npx create-react-app <project-name>


  ### 案例：JSX todoList tab切换 










