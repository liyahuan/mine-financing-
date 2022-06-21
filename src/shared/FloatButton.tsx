import { defineComponent, PropType } from 'vue';
import { Icon,IconName } from './Icon';
import s from './FloatButton.module.scss';
export const FloatButton= defineComponent({
  props:{
    iconName: {
      type: String as PropType<IconName>,
      //  加上下面这段话，就必须传iconName,如果不加，也没传值，iconName有可能是undefined
      required: true
    }
  },
setup:(props,context)=>{
return ()=>(
  <div class={s.floatButton}>
  {/* name会绑定到use上面，class绑定到svg上面 */}
    <Icon name={props.iconName} class={s.icon}/>
  </div>
  )
}
})