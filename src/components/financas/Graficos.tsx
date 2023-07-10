import { Grafico1 } from "./Grafico1";
import { Grafico2 } from "./Grafico2";
import { Grafico3 } from "./Grafico3";

export default function Graficos() {
    return(
        <div className="mx-auto">
            <div className="flex xl:flex-row flex-col gap-4 xl:gap-2 2xl:gap-2">
                <div className="flex box-shadow justify-center items-center md:w-[710px] md:h-[420px] lg:w-[960px] lg:h-[420px] xl:w-[540px] xl:h-[300px] 2xl:w-[740px] rounded-lg border border-zinc-800">
                    <Grafico1 />
                </div>
                <div className="flex box-shadow justify-center items-center md:w-[710px] md:h-[420px] lg:w-[960px] lg:h-[420px] xl:w-[460px] xl:h-[300px] 2xl:w-[700px] rounded-lg border border-zinc-800">
                    <Grafico2 />    
                </div>
                <div className="flex box-shadow justify-center items-center md:w-[710px] md:h-[420px] lg:w-[960px] lg:h-[420px] xl:w-[250px] xl:h-[300px] 2xl:w-[400px] rounded-lg border border-zinc-800 ">
                    <Grafico3 />    
                </div>
                <div className="mt-1">

                </div>
            </div>
        </div>
    )
}