import { defineComponent } from "vue";
import s from './First.module.scss';
export const f = defineComponent({
  setup:(props,context) => {
    const {slots} = context
    return () =>(
      <div class={s.wrapper}>
        <div class={s.card}>
          {slots.icon?.()}
        </div>    
      </div>
    )
  }
})