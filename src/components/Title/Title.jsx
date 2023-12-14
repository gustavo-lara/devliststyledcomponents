import * as C from "./styled.js";

const Title = ({text, iconName}) => {
  const imgUrl = new URL (`/src/assets/icon-${iconName}.svg`, import.meta.url).href
  return (
    // <div className={styles.container}>
    //   <div className={styles.icon}>
    //   <img src={imgUrl} alt=""/>
    //   </div>
    //   <h2 className={styles.title}>{text}</h2>
    // </div>

    <C.Container>
      <C.Icon>
      <img src={imgUrl} alt=""/>
      </C.Icon>
      <C.Title>{text}</C.Title>
    </C.Container>
  )
}

export default Title