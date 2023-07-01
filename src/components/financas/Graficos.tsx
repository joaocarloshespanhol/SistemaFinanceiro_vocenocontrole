import BarChart from "./BarChartjs";
import BarChart2 from "./BarChart2"

export default function Graficos() {
    return(
        <div className="mx-auto">
            <div className="flex xl:flex-row flex-col gap-16 xl:gap-8">
                <div className="flex box-shadow w-80 h-40  md:w-[710px] md:h-[420px] lg:w-[960px] lg:h-[420px] xl:w-[620px] xl:h-[430px] 2xl:w-[910px] 2xl:h-[] rounded-lg border border-zinc-800">
                    <BarChart />
                </div>
                <div className="flex box-shadow w-80 h-40 md:w-[710px] md:h-[420px] lg:w-[960px] lg:h-[420px] xl:w-[620px] xl:h-[430px] 2xl:w-[910px] 2xl:h-[] rounded-lg border border-zinc-800">
                    <BarChart2 />    
                </div>
            </div>
        </div>
    )
}