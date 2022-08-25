import { InboxOutlined } from "@ant-design/icons";
import styles from "./OutData.module.scss";

const OutData = () => {
  return (
    <div className={styles.outdata}>
      <InboxOutlined style={{ fontSize: 60 }} />
      <span>No Data</span>
    </div>
  );
};
export default OutData;
