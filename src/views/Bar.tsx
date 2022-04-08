import { defineComponent } from "vue";
export const Bar = defineComponent({
  setup:(props,context) => {
    return ()=> (<div>导航</div>)
  }
})