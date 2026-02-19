import styles from "../css/sportsPage.module.css";
import fbJersey from "../css/images/jersey_bg.avif";
import fbSpikes from "../css/images/spikes_bg.avif";
import fbBall from "../css/images/football_ball.avif";
import fbPost from "../css/images/goalpost_bg.avif";
import cricket from "../css/images/cricket_bg.webp";
import crWhites from "../css/images/cricket_whites.avif";
import crKit from "../css/images/cricket_kit.avif";
import crShoes from "../css/images/cricket_shoes.avif";
import crNet from "../css/images/cricket_net.avif";
import badminton from "../css/images/badminton_bg.webp";
import bmJersey from "../css/images/badminton_jersey.avif";
import bmRacket from "../css/images/badminton_rackets.avif";
import bmShoes from "../css/images/badminton_shoes.avif";
import bmAccessories from "../css/images/badminton_accessories.avif";

const SportsPage = ({ setScrolling }) => {
    function handleClick() {
        setScrolling()
    }
  return (
    <div className={styles.sportsPage}>
      <div className={styles.v2}>SPORTS ITEMS</div>
      <div className={styles.v3}></div>
      <div className={styles.v4}>
        <div style={{backgroundImage: `url(${fbJersey})`}} className={styles.v4Item} onClick={() =>handleClick()}>
            <p className={styles.text}>Click to Enquire</p>
        </div>
        <div style={{backgroundImage: `url(${fbSpikes})`}} className={styles.v4Item} onClick={() =>handleClick()}>
            <p className={styles.text}>Click to Enquire</p>
        </div>
        <div style={{backgroundImage: `url(${fbBall})`}} className={styles.v4Item} onClick={() =>handleClick()}>
            <p className={styles.text}>Click to Enquire</p>
        </div>
        <div style={{backgroundImage: `url(${fbPost})`}} className={styles.v4Item} onClick={() =>handleClick()}>
            <p className={styles.text}>Click to Enquire</p>
        </div>
      </div>

      <div style={{backgroundImage: `url(${badminton})`}} className={styles.v3}></div>
      <div className={styles.v4}>
        <div style={{backgroundImage: `url(${bmJersey})`}} className={styles.v4Item} onClick={() =>handleClick()}>
            <p className={styles.text}>Click to Enquire</p>
        </div>
        <div style={{backgroundImage: `url(${bmRacket})`}} className={styles.v4Item} onClick={() =>handleClick()}>
            <p className={styles.text}>Click to Enquire</p>
        </div>
        <div style={{backgroundImage: `url(${bmShoes})`}} className={styles.v4Item} onClick={() =>handleClick()}>
            <p className={styles.text}>Click to Enquire</p>
        </div>
        <div style={{backgroundImage: `url(${bmAccessories})`}} className={styles.v4Item} onClick={() =>handleClick()}>
            <p className={styles.text}>Click to Enquire</p>
        </div>
      </div>

      <div style={{backgroundImage: `url(${cricket})`}} className={styles.v3}></div>
      <div className={styles.v4}>
        <div style={{backgroundImage: `url(${crWhites})`}} className={styles.v4Item} onClick={() =>handleClick()}>
            <p className={styles.text}>Click to Enquire</p>
        </div>
        <div style={{backgroundImage: `url(${crKit})`}}  className={styles.v4Item} onClick={() =>handleClick()}>
            <p className={styles.text}>Click to Enquire</p>
        </div>
        <div style={{backgroundImage: `url(${crShoes})`}}  className={styles.v4Item} onClick={() =>handleClick()}>
            <p className={styles.text}>Click to Enquire</p>
        </div>
        <div style={{backgroundImage: `url(${crNet})`}} className={styles.v4Item} onClick={() =>handleClick()}>
            <p className={styles.text}>Click to Enquire</p>
        </div>
      </div>
    </div>
  );
};

export default SportsPage;
