export const state = () =>({
  memo_list: [],
  page: 0,
})

export const mutations = {
  insert(state,obj){
    let d = new Date();
    let fmt = d.getFullYear() + '-'
            + (d.getMonth() + 1) + '-'
            + d.getDate() * ' '
            + d.getHours() + ':'
            + d.getMinutes();
    state.memo_list.unshift({
      title: obj.title,
      content: obj.content,
      created: fmt,
    });
  },
  set_page(state,p){
    state.page = p;
  },
  remove(state,obj){
    let num = 0;
    for(let i = 0; i < state.memo_list.length; i++){
      const ob = state.memo_list[i];
      if(ob.title == obj.title
        && ob.content == obj.content
        && ob.created == obj.created){
          alert('remove it! -- ' + ob.title);
          state.memo_list.splice(i,1);
          return;
        }
    }
  }
}