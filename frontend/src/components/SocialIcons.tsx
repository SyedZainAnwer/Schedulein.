import Image from "next/image"
import { Button } from "./ui/button"
import googleIcon from '@/assets/google.svg';
import facebookIcon from '@/assets/facebook.svg';
import githubIcon from '@/assets/github.svg';

const SocialIcons = () => {
    return (
        <div className="flex justify-evenly w-full">
            <Button variant="ghost" size="forIcon" >
                <Image src={googleIcon} alt="google icon" height={30} width={30} />
            </Button>
            <Button variant="ghost" size="forIcon">
                <Image src={facebookIcon} alt="google icon" height={35} width={35} />
            </Button>
            <Button variant="ghost" size="forIcon">
                <Image src={githubIcon} alt="google icon" height={35} width={35} />
            </Button>
        </div>
    )
}

export default SocialIcons;