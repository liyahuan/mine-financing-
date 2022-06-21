import { defineComponent, PropType } from 'vue';
import s from './Icon.module.scss';
export type IconName = 'add' | 'chart' | 'clock' | 'cloud' | 'magosteen' | 'pig';
export const  Icon = defineComponent({
  // defineComponent 接收大写的Props，就不能用小写的，方方推荐直接用小写的写法如下：
  // type是传给js,让js知道的类型， proptype是让ts知道的类型，到浏览器中就是js语言了。
  props:{
    name: {
      type: String  as PropType<IconName>,
    //  加上下面这段话，就必须传iconName
      required: true
    }
  },
setup:(props,context)=>{
  return ()=>(
    <svg class={s.icon}>
      <use xlinkHref={'#' + props.name}></use>
    </svg>
    )
  }
})
