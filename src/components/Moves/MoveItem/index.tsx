import { Move, VersionGroupDetail } from "@Components/types";
import { Avatar, List } from "antd";
import styles from "../Moves.module.scss";

type Props = {
  item: Move;
};

type DescProps = {
  details: VersionGroupDetail;
};

const Description = ({ details }: DescProps) => (
  <div className={styles.details__container}>
    <div>
      <span>Level learned:</span>
      <span>{details.level_learned_at}</span>
    </div>
    <div>
      <span>how to learn:</span>
      <span>{details.move_learn_method.name}</span>
    </div>
  </div>
);

const MoveItem = ({ item }: Props) => {
  return (
    <List.Item key={item.move.name}>
      <List.Item.Meta
        title={<span>{item.move.name}</span>}
        description={
          <Description
            details={item.version_group_details[item.version_group_details.length - 1]}
          />
        }
      />
    </List.Item>
  );
};
export default MoveItem;
