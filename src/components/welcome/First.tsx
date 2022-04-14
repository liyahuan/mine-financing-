import { defineComponent } from "vue";
import s from './First.module.scss';
import pig from '../../assets/icons/pig.svg';
import { f } from './f'
export const First = defineComponent({
  setup:(props,context) => {
    const slots = {
      icon: () => <img src={pig} />,
    }
    return () =>(
      <f v-slots={slots}></f>
    )
  }
})