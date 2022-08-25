import { Stat } from "@Components/types";
import { Progress } from "antd";
import styles from "./BaseStats.module.scss";

type Props = {
  baseStats: Array<Stat>;
};

const BaseStats = ({ baseStats }: Props) => {
  return (
    <div className={styles.baseStats}>
      <h2>Base Stats</h2>
      {baseStats?.map((stat) => (
        <div key={stat.stat.name} className={styles.baseStats__individuals}>
          <span>{stat.stat.name}</span>
          <Progress
            strokeLinecap="butt"
            percent={stat.base_stat / 2}
            format={() => `${stat.base_stat}`}
            steps={10}
          />
        </div>
      ))}
    </div>
  );
};
export default BaseStats;
