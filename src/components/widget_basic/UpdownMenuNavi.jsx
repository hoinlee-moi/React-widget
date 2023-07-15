import styles from '../../styles/week01/updownMenuNavi.module.css'

const UpdownMenuNavi = () => {
    return <div className={styles.container}>
        <div className={styles.navi}>
            <a href='#none' data-link="메일" ></a>
            <a href='#none' data-link="카페"></a>
            <a href='#none' data-link="블로그"></a>
            <a href='#none' data-link="지식IN"></a>
            <a href='#none' data-link="쇼핑"></a>
            <a href='#none' data-link="페이"></a>
            <a href='#none' data-link="사전"></a>
            <a href='#none' data-link="뉴스"></a>
        </div>
    </div>
}

export default UpdownMenuNavi