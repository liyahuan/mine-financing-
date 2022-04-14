import { defineComponent, vModelSelect } from "vue";
import { RouterView } from "vue-router";
import s from './welcome.module.scss';
import logo from '../assets/icons/mangosteen.svg';
export const Welcome = defineComponent({
  setup:(props,context)=>{
    return ()=>(<div class={s.wrapper}>
      <header>
        <img src={logo} width="64" alt="" />
        <h1>山竹记账</h1>
      </header>
      <main class={s.main}><RouterView></RouterView></main>
      </div>
    )
  }
})