import Image from "next/image";

export default function Logo() {
    return (
        <div className="">
            <Image src="/Logo.svg" width={120} height={120} alt="logo" />
        </div>
    );
}
