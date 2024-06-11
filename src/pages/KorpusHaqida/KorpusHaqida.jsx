import css from './KorpusHaqida.module.css';
import Korpus from "../../components/Korpus/Korpus.jsx";

const KorpusHaqida = () => {
    return (
        <div className={css.korpusHaqidaWrapper}>
            <div className={css.container}>
                <div className={css.korpusWrapper}>
                    <Korpus/>
                </div>
            </div>
        </div>
    )
}

export default KorpusHaqida;