<!--
  FileDesc  :
  webUrl    :
  Author    : g_eno_phy (2020-11-27 15:58)
  Version   :
  Usage     :
    - template
      <CSS.SimpleChat></CSS.SimpleChat>
    - props
    - event
    - method

-->

<template>
  <div class="root">
    <div class="title">简易聊天,最多显示10条记录</div>
    <div class="container">
      <div class="container_chat">
        <div class="container_chat__container">
          <div v-for="(chat,idx) in chatList" :key="idx" class="chat_line">
            <div class="chat_wrapper" :class="{'self': chat.self===true}">
              <i class="chat_header" :class="[chat.sex]">{{ chat.name }}</i>
              <div class="chat_content">
                {{ chat.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container_input">
        <input v-model.trim="inputStr" class="input" type="text">
        <button class="btn-submit" @click="handleSubmit">提交</button>
      </div>
      <div class="container_chat__overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  name    : 'CSS.SimpleChat',
  props   : {},
  data() {
    return {
      isQuerying  : false,    // 是否正在查询
      isSubmitting: false,    // 是否正在提交
      chatList    : [
        {name: 'Jack', sex: 'male', content: '1你好你好你好你好你好你好你好你好你好你好你好你好'},
        {name: 'Jack', sex: 'male', content: '2你好你好你好你好你好你好你好你好你好你好你好你好'},
        {name: 'Jack', sex: 'male', content: '3你好你好你好你好你好你好你好你好你好你好你好你好'},
        {name: 'Jack', sex: 'male', content: '4你好你好你好你好你好你好你好你好你好你好你好你好'},
        {name: 'Jack', sex: 'male', content: '5你好你好你好你好你好你好你好你好你好你好你好你好'},
        {name: 'Rose', sex: 'female', content: 'hello6'},
        {name: 'Tome', sex: 'male', content: 'hi7'},
        {name: 'Fen', sex: '', content: 'hi8'},
        {name: 'Mark', sex: 'male', content: 'hi', self: true}
      ],
      inputStr    : ''
    };
  },
  computed: {},
  watch   : {},
  created() {
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods : {
    /* _____________________________________________________________________________________ */
    /* _____________________________________________________________________________________ */
    /* _____________________________________________________________________________________ */
    /* _____________________ [ handle ] ____________________________________________________ */

    /**
     * 提交
     */
    handleSubmit() {
      if (this.inputStr) {
        this.$_appendArr(this.chatList, {name: 'Mark', sex: 'male', content: this.inputStr, self: true}, 10);
      }
      this.inputStr = '';
    },
    /* _____________________________________________________________________________________ */
    /* _____________________________________________________________________________________ */
    /* _____________________________________________________________________________________ */
    /* _____________________ [ public ] ____________________________________________________ */

    /* _____________________________________________________________________________________ */
    /* _____________________________________________________________________________________ */
    /* _____________________________________________________________________________________ */
    /* _____________________ [ private: *,query,fetch,action,init ] ________________________ */

    /**
     * 追加数组
     * @param arr
     * @param newItem
     * @param max 最大数组长度
     */
    $_appendArr(arr = [], newItem, max) {
      if (arr.length >= max) arr.shift(); // 移除数组第一个
      arr.push(newItem); // 追加
    }
  }
};
</script>
<style scoped>
/*
    01.显示与浮动 (display,float)
    02.定位(position,left,z-index)
    03.尺寸(width,height)
    04.边框及相关属性（margin,padding,border,outline）
    05.字体样式(font)
    06.背景（background）
    07.其它样式(opacity,cursors,transform,...)
*/
.root {
  display         : flex;
  flex-flow       : column nowrap;
  justify-content : center;
  align-items     : center;
  height          : 100%;
}

.container {
  display    : flex;
  flex-flow  : column;
  position   : relative;
  height     : 600px;
  border     : 1px solid rgba(0, 0, 0, 0.12);
  box-shadow : 0 2px 4px rgba(0, 0, 0, 0.24);


}

.container_chat {
  flex-grow     : 1;
  display       : flex;
  flex-flow     : column-reverse nowrap;
  justify-items : flex-end;
  position      : relative;
  width         : 300px;
  padding       : 8px;
  overflow-y    : auto;
  mask-image    : linear-gradient(to bottom, transparent 0%, #fff 200px);
}

.chat_line {
  padding : 8px;
}

.chat_wrapper {
  display     : flex;
  align-items : center;
}

.chat_wrapper.self {
  flex-direction : row-reverse;
}


.chat_header {
  flex-shrink     : 0;
  display         : flex;
  justify-content : center;
  align-items     : center;
  width           : 48px;
  height          : 48px;
  font-size       : 12px;
  border-radius   : 50%;
  box-shadow      : 0 2px 4px rgba(0, 0, 0, 0.24);
  user-select     : none;
}

.chat_header {
  background-color : #fff;
}

.chat_header.male {
  color            : #fff;
  background-color : #00a1ff;
}

.chat_header.female {
  color            : #fff;
  background-color : #ff8a65;
}

.chat_content {
  display          : flex;
  align-items      : center;
  min-height       : 32px;
  margin           : 0 16px;
  padding          : 4px 16px;
  font-size        : 12px;
  text-align       : left;
  background-color : #fff;
  box-shadow       : 0 2px 4px rgba(0, 0, 0, 0.24);
  border-radius    : 8px;
}

.container_input {
  flex-shrink      : 0;
  display          : flex;
  padding          : 16px 16px 8px 16px;
  background-color : #fff;
}

.container_input .input {
  flex-grow     : 1;
  height        : 30px;
  padding       : 0 16px;
  border-radius : 16px;
  border        : 1px solid #e2e2e2;
  outline       : none;
}

.container_input .btn-submit {
  flex-shrink      : 0;
  margin-left      : 8px;
  padding          : 0 16px;
  border           : none;
  color            : #fff;
  background-color : #00a1ff;
  font-size        : 12px;
  border-radius    : 8px;
  outline          : none;
  cursor           : pointer;
}

.container_input .btn-submit:active {
  background-color : #00b3ff;
}
</style>
