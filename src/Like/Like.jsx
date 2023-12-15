
import './Like.css';

export const Like = () => {
  const data = JSON.parse(localStorage.getItem("product"))
  console.log(data);

  return (
    <div>
      <h1>hello form Like</h1>
      <div className={style.cardBox}>
      {data?.map(item => {
        return (

          <div className={style.cardItem} key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>

        )
      })}
      </div>
    </div>
  )
}
