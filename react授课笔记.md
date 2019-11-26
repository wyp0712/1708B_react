
# day1 react 第一天授课内容
  ## react 简介

  ## 虚拟dom

  ## JSX语法：
  1. 概念：JSX语法即JS和html的混合体，实际的核⼼心逻辑就是⽤用js去实现的
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
    ReactDOM.render(React.createElement(HelloMessage, {
    name: "Taylor" }), document.getElementById('hello-
    example'));

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










