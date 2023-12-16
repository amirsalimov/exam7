export const Like = () => {
  const allData = [];
  const datas = JSON.parse(localStorage.getItem("product"));
  datas?.map((item) => {
    allData.push(item);
  });

  const { id } = useParams();
  const singleData = data.find((item) => item.id == id);
  const { name, title, price, img } = singleData;

  const postLocalStorage = () => {
    allData.push(singleData);
    localStorage.setItem("product", JSON.stringify(allData));
  };

  return (
    <div>
      <div>
        <h1>Like</h1>
      </div>
      <div>
        <img src={img} alt="asdf" />
        <h4>{title}</h4>
        <h3>
          <b>{price}</b>
        </h3>
        <button onClick={postLocalStorage}>savatga qo'shish</button>
      </div>
    </div>
  );
};
