## useRequest
  网络请求函数

  ```jsx
  // service是一个异步请求函数，返回promise
  const { data, error, loading } = useRequest(service)

  // 举例
  function getName() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('name')
      }, 3000)
    })
  }

  // 使用
  // 初始化时，自动执行一次改异步函数
  const { data, error, loading } = useRequest(getName)
  if (error) {
    return <div>error</div>
  }
  if (loading) {
    return <div>loading</div>
  }
  return <div>{data}</div>

  // 也可以配置手动触发
  // run的执行结果要在参数onSuccess或者onError去执行
  // runAsync需要手动then或者catch
  const { loading, run ,runAsync } = useRequest(service, {
    // 手动执行，则返回run等参数
    manual: true,
    // 给run的回调用
    onSuccess: (result, params) => {},
    onError: (error) => {}
  })

  run()

  // 或者
  runAsync().then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  })
  ```

  **其他配置项**

  - onBefore：请求之前
  - onSuccess
  - onError
  - onFinally
  - refresh：重复上一次请求
  - refreshAsync：类似runAsync
  - cancel：忽略promise的结果


## useMount

  组件挂载执行，useMount + []依赖实现

## useUnmount

  组件卸载执行，useMount返回函数 + []依赖实现

## useUpdate

  实现setState更新效果，其实内部也是用一个useState来实现的

## useLatest

  返回引用数据的最新状态，其实就是ref

## useToggle

  开关切换，返回一个toggle

## useDebounce

  防抖，不多说了，短时间内多次触发，只执行最后一次；场景input输入关键字搜索，只对最后一次输入做匹配查询

## useThrottle

  节流，频繁操作下，每一间隔执行一次；