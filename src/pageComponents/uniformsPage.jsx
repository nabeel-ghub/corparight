import { useEffect, useState } from "react";
import styles from "../css/uniformsPage.module.css";
import schoolUniforms from "../css/images/school_uniforms.avif";
import corporateUniforms from "../css/images/corporate_uniforms.avif";
import hotelUniforms from "../css/images/hotel_uniforms.avif";
import retailUniforms from "../css/images/retail_uniforms.avif";
import constructionUniforms from "../css/images/construction_uniforms.avif";
import secutiryUniforms from "../css/images/security_uniforms.avif";

const UniformsPage = ({setScrolling}) => {
  const [currentUniform, setCurrentUniform] = useState(1);
  const [mouseMoving, setMouseMoving] = useState(false);
  const [index, setIndex] = useState(0);
  const [textArray] = useState([
    <p key="1">Uniform Design</p>,
    <p key="2">Uniform Sampling</p>,
    <p key="3">Uniform Production</p>,
    <p key="4">Embroidery and Screen Printing Solutions/Sublimation</p>,
    <p key="5">Customized Tailoring</p>,
    <p key="6">Ready Size Garments</p>,
    <p key="7">
      Procurement Expertise in Quality Fabrics, Woven & Knitted Garments
    </p>,
    <p key="8">Styling Advise</p>,
  ]);

  useEffect(() => {
    if (mouseMoving) return;
    const timer = setInterval(() => {
      if (currentUniform >= 6) return setCurrentUniform(1);
      setCurrentUniform((prev) => prev + 1);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [currentUniform, mouseMoving]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [textArray]);

  function handleMouseEnter(e) {
    if (!e.target.id) return;
    setMouseMoving(true);
    setCurrentUniform(Number(e.target.id));
  }

  function handleMouseLeave(e) {
    setMouseMoving(false);
  }

  function handleClick() {
    setScrolling(prev => !prev)
  }

  return (
    <div className={styles.uniformsPage}>
      <div className={styles.v2}>UNIFORMS</div>
      <div className={styles.v3}>
        <div
        style={{backgroundImage: `url(${schoolUniforms})`}}
          className={
            currentUniform === 1
              ? `${styles.v3Item} ${styles.active}`
              : styles.v3Item
          }
          onMouseMove={(e) => handleMouseEnter(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          id="1"
        >
          <h1 id="1" className={styles.text}>
            School Uniforms
          </h1>
          <button id="1" className={styles.button} onClick={() => handleClick()}>
            Click to Enquire
          </button>
        </div>
        <div
        style={{backgroundImage: `url(${corporateUniforms})`}}
          className={
            currentUniform === 2
              ? `${styles.v3Item} ${styles.active}`
              : styles.v3Item
          }
          onMouseMove={(e) => handleMouseEnter(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          id="2"
        >
          <h1 id="2" className={styles.text}>
            Corporate Uniforms
          </h1>
          <button id="2" className={styles.button} onClick={() => handleClick()}>
            Click to Enquire
          </button>
        </div>
        <div
        style={{backgroundImage: `url(${hotelUniforms})`}}
          className={
            currentUniform === 3
              ? `${styles.v3Item} ${styles.active}`
              : styles.v3Item
          }
          onMouseMove={(e) => handleMouseEnter(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          id="3"
        >
          <h1 id="3" className={styles.text}>
            Hotel Uniforms
          </h1>
          <button id="3" className={styles.button} onClick={() => handleClick()}>
            Click to Enquire
          </button>
        </div>
        <div
        style={{backgroundImage: `url(${retailUniforms})`}}
          className={
            currentUniform === 4
              ? `${styles.v3Item} ${styles.active}`
              : styles.v3Item
          }
          onMouseMove={(e) => handleMouseEnter(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          id="4"
        >
          <h1 id="4" className={styles.text}>
            Retail Uniforms
          </h1>
          <button id="4" className={styles.button} onClick={() => handleClick()}>
            Click to Enquire
          </button>
        </div>
        <div
        style={{backgroundImage: `url(${constructionUniforms})`}}
          className={
            currentUniform === 5
              ? `${styles.v3Item} ${styles.active}`
              : styles.v3Item
          }
          onMouseMove={(e) => handleMouseEnter(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          id="5"
        >
          <h1 id="5" className={styles.text}>
            Construction Uniforms
          </h1>
          <button id="5" className={styles.button} onClick={() => handleClick()}>
            Click to Enquire
          </button>
        </div>
        <div
        style={{backgroundImage: `url(${secutiryUniforms})`}}
          className={
            currentUniform === 6
              ? `${styles.v3Item} ${styles.active}`
              : styles.v3Item
          }
          onMouseMove={(e) => handleMouseEnter(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          id="6"
        >
          <h1 id="6" className={styles.text}>
            Security Uniforms
          </h1>
          <button id="6" className={styles.button} onClick={() => handleClick()}>
            Click to Enquire
          </button>
        </div>
      </div>
      <div className={styles.v4}>
        <div className={styles.v4v1}>OUR SERVICES</div>
        <div className={styles.v4v2}>
          <div className={styles.v4v2h1}>
            <ul>
              <li>Uniform Design</li>
              <li>Uniform Sampling</li>
              <li>Uniform Production</li>
              <li>Embroidery and Screen Printing Solutions/Sublimation</li>
              <li>Customized Tailoring</li>
              <li>Ready Size Garments</li>
              <li>
                Procurement Expertise in Quality Fabrics, Woven & Knitted
                Garments
              </li>
              <li>Styling Advise</li>
            </ul>
          </div>
          <div className={styles.v4v2h2}>{textArray[index]}</div>
        </div>
      </div>
    </div>
  );
};

export default UniformsPage;
