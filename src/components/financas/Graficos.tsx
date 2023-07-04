import { Grafico1 } from "./Grafico1";
import { Grafico2 } from "./Grafico2";
import { Grafico3 } from "./Grafico3";

export default function Graficos() {
    return(
        <div className="mx-auto">
            <div className="flex xl:flex-row flex-col gap-16 xl:gap-2 2xl:gap-2">
                <div className="flex box-shadow w-80 h-40  md:w-[710px] md:h-[420px] lg:w-[960px] lg:h-[420px] xl:w-[540px] xl:h-[280px] 2xl:w-[730px] 2xl:h-[] rounded-lg border border-zinc-800">
                    <Grafico1 />
                </div>
                <div className="flex box-shadow w-80 h-40 md:w-[710px] md:h-[420px] lg:w-[960px] lg:h-[420px] xl:w-[460px] xl:h-[280px] 2xl:w-[680px] 2xl:h-[] rounded-lg border border-zinc-800">
                    <Grafico3 />    
                </div>
                <div className="flex box-shadow justify-center items-center w-80 h-40 md:w-[710px] md:h-[420px] lg:w-[960px] lg:h-[420px] xl:w-[250px] xl:h-[280px] 2xl:w-[420px] 2xl:h-[] rounded-lg border border-zinc-800 ">
                    <Grafico2 />    
                </div>
                <div className="mt-1">

                </div>
            </div>
        </div>
    )
}