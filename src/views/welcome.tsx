import { defineComponent, vModelSelect } from "vue";
import { RouterView } from "vue-router";
import style from './welcome.module.scss';
import logo from '../assets/icons/mangosteen.svg';
export const Welcome = defineComponent({
  setup:(props,context)=>{
    return ()=>(<div class={style.wrapper}>
      <header>
        <img src={logo} width="120" alt="" />
        <h1>山竹记账</h1>
      </header>
      <main><RouterView></RouterView></main>
      </div>
    )
  }
})