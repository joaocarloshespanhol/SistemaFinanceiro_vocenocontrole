import Image from "next/image";

export default function Logo() {
    return (
        <div>
            <Image src="/logovoce.svg" width={120} height={120} alt="logo" />
        </div>
    );
}
