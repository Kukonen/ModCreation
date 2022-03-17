import Block from "./Block";
import styles from '../../styles/Blocks.module.scss';

export interface BlockProps {
    img ?: string;
    link : string;
    text: string;
}

interface BlocksProps {
    blocks: BlockProps[];
}

export type BlocksType = BlockProps[];

const Blocks = ({blocks} : BlocksProps) => {
    const Blocks_Elements = blocks.map(block => {
        return <Block img={block.img} link={block.link} text={block.text} />
    })

    return (
        <div className={styles.blocks}>
            { Blocks_Elements }
        </div>
    )
}

export default Blocks;