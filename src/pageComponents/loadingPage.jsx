import styles from "../css/loadingPage.module.css";
import loading from "../css/images/loading.mp4";

const LoadingPage = ({setIsLoading}) => {
    function handleEnd() {
        setIsLoading(false)
    }
    return(
        <div className={styles.loadingPage}>
            <video autoPlay playsInline onEnded={handleEnd} muted>
                <source src={loading}></source>
            </video>
        </div>
    )
}

export default LoadingPage;