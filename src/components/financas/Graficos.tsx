import { Grafico1 } from "./Grafico1";
import { Grafico2 } from "./Grafico2";
import { Grafico3 } from "./Grafico3";

export default function Graficos() {
    return(
        <div className="mx-auto">
            <div className="flex xl:flex-row flex-col gap-16 xl:gap-12">
                <div className="flex box-shadow w-80 h-40  md:w-[710px] md:h-[420px] lg:w-[960px] lg:h-[420px] xl:w-[740px] xl:h-[340px] 2xl:w-[710px] 2xl:h-[] rounded-lg border border-zinc-800">
                    <Grafico1 />
                </div>
                <div className="flex box-shadow w-80 h-40 md:w-[710px] md:h-[420px] lg:w-[960px] lg:h-[420px] xl:w-[320px] xl:h-[340px] 2xl:w-[600px] 2xl:h-[] rounded-lg border border-zinc-800">
                    <Grafico3 />    
                </div>
                <div className="flex box-shadow justify-center items-center w-80 h-40 md:w-[710px] md:h-[420px] lg:w-[960px] lg:h-[420px] xl:w-[320px] xl:h-[340px] 2xl:w-[400px] 2xl:h-[] rounded-lg border border-zinc-800 ">
                    <Grafico2 />    
                </div>
                <div className="mt-1">

                </div>
            </div>
        </div>
    )
}