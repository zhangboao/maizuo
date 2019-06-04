export default {
  get(key){
    console.log('获取缓存')
    if(window.localStorage){
      let data=JSON.parse(localStorage.getItem(key))
      if(!data){return null}
      let nowtime=(new Date()).getTime()
      if(nowtime-data.ctime>data.outtime){
        return  null
      }else{
        return  data.data
      }
    }
  },
  set(key,data,time){
    console.log('设置缓存')
    // time 1d   3h  3m  
    //time 过期时间
    let tmp={
      data:data,
      ctime:(new Date()).getTime(),
      outtime:time
    }
    let tmpdata=JSON.stringify(tmp)
    localStorage.setItem(key,tmpdata)
  }
}

