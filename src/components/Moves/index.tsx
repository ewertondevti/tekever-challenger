import { Move } from "@Components/types";
import { List } from "antd";
import styles from "./Moves.module.scss";
import VirtualList from "rc-virtual-list";
import MoveItem from "./MoveItem";

type Props = {
  moves: Array<Move>;
};

const Moves = ({ moves }: Props) => {
  const ContainerHeight = 400;

  return (
    <List className={styles.moves__container} size="small" key="movesList">
      <VirtualList data={moves} itemKey="moves" height={ContainerHeight} itemHeight={moves?.length}>
        {(item) => <MoveItem item={item} key={item.move.name} />}
      </VirtualList>
    </List>
  );
};
export default Moves;
