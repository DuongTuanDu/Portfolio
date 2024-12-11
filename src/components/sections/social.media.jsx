import { FaFacebook } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

const SocialMedia = (props) => {
    const { youtube, tiktok, instagram, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={youtube} target='_blank' className="highlight" title="Youtube Tuấn Dự">
                <SiYoutubeshorts size={30} />
            </a>
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok Tuấn Dự">
                <FaTiktok size={30} />
            </a>
            <a href={instagram} target='_blank' className="highlight" title="Instagram Tuấn Dự">
                <BsInstagram size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Tuấn Dự">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;