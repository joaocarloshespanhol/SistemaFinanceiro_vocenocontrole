import Image from "next/image";

export default function Logo() {
    return (
        <div className="mb-4">
            <Image src="/Logo.png" width={120} height={120} alt="logo" />
        </div>
    );
}
