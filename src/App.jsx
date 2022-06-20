import { useState } from "react";
import styles from "./styles.module.css";

function App() {
  const [addBtnClass, setAddBtnClass] = useState(styles.addBtn);
  const [isDis, setDis] = useState(false);
  const [details, setDetails] = useState(false);

  const handleAdd = () => {
    setAddBtnClass(styles.addBtnDis);
    setDis(true);
  };
  const handleDel = () => {
    setDis(false);
    setAddBtnClass(styles.addBtn);
  };
  const handleDetails = () => {
    setDetails(true);
  };
  const handleDelDetails = () => {
    setDetails(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.imgCnt}>
          <img
            src="https://i1.wp.com/images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            alt="redSnickers"
            className={styles.img}
          />
        </div>
        <div className={styles.titleInfo}>
          <div className={styles.text}>
            <h2 className={styles.title}>Nike Air</h2>
            <h2 className={styles.price}>120$</h2>
          </div>
          <div className={styles.btnCnt}>
            <button className={styles.more} onClick={handleDetails}>
              Детали
            </button>
            {details && (
              <div className={styles.detailsCnt}>
                <div className={styles.detailsS}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam cumque non quibusdam
                </div>
                <button className={styles.x} onClick={handleDelDetails}>
                  x
                </button>
              </div>
            )}
          </div>
        </div>
        <hr className={styles.line} />
        <div className={styles.about}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cumque
          non quibusdam
        </div>
        <div className={styles.cartCnt}>
          <button className={addBtnClass} disabled={isDis} onClick={handleAdd}>
            {(isDis && "Уже в корзине") || (!isDis && "Добавит в корзину")}
          </button>
          {isDis && (
            <p>
              <button className={styles.delBtn} onClick={handleDel}>
                Удалить из корзины
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
