import { c as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_DGXVsN46.mjs';
import 'kleur/colors';
import 'clsx';
import { s as setOnSetGetEnv } from './runtime_BaX0UJyD.mjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

setOnSetGetEnv(() => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  let ScoreData = "N/A";
  try {
    const res = await fetch(SCORE_API_ENDPOINT);
    if (res.ok) {
      ScoreData = (await res.text()).trim();
    } else {
      console.error("Error en fetch Score:", res.status, res.statusText);
    }
  } catch (err) {
    console.error("Error al cargar ScoreData:", err);
  }
  return renderTemplate`${maybeRenderHead()}<span class="text-xs" id="score">
Puntuación &#11088; ${ScoreData}/5
</span>`;
}, "C:/Users/marlo/OneDrive/Desktop/PROYECTOS/midudev/astroProject/src/components/BookScore.astro", void 0);

const $$file = "C:/Users/marlo/OneDrive/Desktop/PROYECTOS/midudev/astroProject/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
