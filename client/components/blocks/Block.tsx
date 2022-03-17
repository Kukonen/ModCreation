import {ReactElement} from "react";
import Link from "next/link";
import styles from '../../styles/Blocks.module.scss';
import {BlockProps} from "./Blocks";

const Block = ({img, link, text} : BlockProps) : ReactElement => {
    return (
        <div className={styles.block}>
            <img
                src={img ? img : "defaultBlockImg.png"}
                alt="image"/>
            <div>
                <Link
                    href={link}
                >
                    <a>
                        {text}
                    </a>
                </Link>
            </div>

        </div>
    )
}

export default Block;