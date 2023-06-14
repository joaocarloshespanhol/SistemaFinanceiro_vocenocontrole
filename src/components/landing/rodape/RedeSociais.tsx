import { IconBrandLinkedin, IconBrandGithub, IconBrandInstagram} from "@tabler/icons-react"
import RedeSocial from "./RedeSocial"

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandInstagram />} url="https://www.instagram.com/jc.sites/" />
            <RedeSocial icone={<IconBrandLinkedin />} url="https://www.linkedin.com/in/joaocarloshespanhol/" />
            <RedeSocial icone={<IconBrandGithub />} url="https://github.com/joaocarloshespanhol" />
        </div>
    )
}