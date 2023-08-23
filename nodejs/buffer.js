const str = "开开心心"

// buffer需要预先申请内存空间
// 如果第一次申请，需要系统发起申请空间，然后再根据申请的大小，将空间进行分配
const buffer = new Buffer(str.length * 3)
buffer.write(str, 'utf-8')

console.log(buffer)
console.log(buffer.length)