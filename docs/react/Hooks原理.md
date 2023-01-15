## 疑问
- 为什么hooks一定要保证顺序，不允许if等条件呢？
- 函数组件怎么保存状态呢？

## 为什么hooks不能用到条件/循环当中呢？

  首先我们知道hooks其实是一个链表结构，通过指针进行hook上下关联；每次执行hook的update函数时，都会设置全局变量`nextCurrentHook`来保存当前hook的下一个hook；函数组件执行内部hooks的时候，由于是读取全局变量来知道下一个该执行的hook是哪一个，如果加入了判断语句的话，就存在某些hook不会或者多执行，导致函数组件的hooks状态复用失败。

  

## 函数组件保存状态

  实际上也不是保存在函数上，而是函数对应Fiber节点上的`memoizedState`，是一个链表结构；大致结构如下

  - baseQueue：更新队列（类似更新合并）
  - baseState：我们初始化传入的值
  - memoizedState：根据hook类型
    - 假设是useState，则就是传入的值
    - 如果是useEffect，则是一个对象
    - 还有其他情况
  - next：下一个hook对象

  ```js
  const FiberNode = {
    memoizedState: {
      baseQueue: null,
      baseState: 0,
      memoizedState: 0,
      next: {
        baseQueue: null,
        baseState: 0,
        // useEffect
        memoizedState: {
          create: () => {} // 我们传入的函数
          deps: [] // 依赖
          next: {} //下一个useEffecthook
        },
        next: { ... }
      }
    }
  }
  ```

## 代码流程

- beginWork

  // react-reconciler/src/ReactFiberBeiginWork.js

  react调度的时候（调度篇再说），最终会走到beginWork：`根据ReactNode的节点tag来判断是不是函数组件，是的话走挂载或者更新FunctionComponent的流程`，每一个函数组件都会经过`renderWithHooks`的流程

- renderWithHooks

  // react-reconciler/src/ReactFiberHooks.js

  renderWithHooks执行时，会根据传进来的Fiber是否为空判断，如果未空，说明当前函数组件是第一次执行，需要走挂载mount流程；否则是更新走update流程；

  如果是挂载，手动将React的hooks函数赋值成相应的mount函数`HooksDispatcherOnMount`，比如这时候React.useState执行的就是MountState；

  否则如果是更新，此时hooks函数赋值成相应的update函数`HooksDispatcherOnUpdate`，此时执行的时候就是updateState

- 如果是挂载，走对应的mountXXX函数，接着mountWorkInProgressHook

  初始化一个hook对象，如果当前fiber的hooks对象为空，则赋值给当前hook对象`workInProgressHook`，否则`workInProgressHook`的next指向hook，返回`workInProgressHook`

  ps: 所以其实hooks就是一个链表，如果有多个hook，就按顺序更新的指针的next属性上

- 如果是更新，走updateWorkInProgressHook

  没看懂

**小结**


## useState

  useState会返回一个数组，第一项是state值，第二项是dispatch；

  当dispatch的时候其实类似class组件的setState，会进入我们的更新流程；

## useEffect

  useEffect比较特殊，不是返回或者存储一个值，而是当依赖改变的时候进行执行一个函数；useEffect内部会存储传进来的函数，在dom节点完成渲染后，执行这些effect函数

