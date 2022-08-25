import styles from "./Home.module.scss";
import thankyouImg from "@Assets/thankyou.png";

const Home = () => {
  return (
    <div className={styles.content}>
      <h1>Hello trainer!</h1>
      <h2>
        This is a really funny challenger requested by Tekever company. It was really funny to
        develop this and I loved it. Thanks you Tekever for this opprtunity!
      </h2>

      <img src={thankyouImg} alt="Thank you!" />
    </div>
  );
};

export default Home;
