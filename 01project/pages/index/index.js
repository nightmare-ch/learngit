const app = getApp()

Page({
  data:{
    product:{
      price:10,
      num:5
    },
    products:[
      {
        name:'苹果',
        price:3.2
      },
      {
        name:'面包',
        price:5
      },
      {
        name:'可乐',
        price:2.5
      }
    ]
  },//这里是加逗号
  onAddnNum(){
    //修改数据值要用setData
    this.setData({
      'product.num': this.data.product.num + 1
    })
  },
  onSubnNumN(e){
    //修改数据值要用setData
    const step = parseInt(e.target.dataset.step)
    this.setData({
      'product.num': this.data.product.num - step
    })
  },
  onInput(e){
    //4.获取用户输入的值
    const val = parseInt(e.detail.value)
    //5.幅值给【商品数量】
    this.setData({
      'product.num': val
    })
  }
})