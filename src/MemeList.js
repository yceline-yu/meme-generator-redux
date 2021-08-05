import Meme from "./Meme";

function MemeList({ memes, remove }) {
const memeList = memes.map(val => {
  return <Meme 
      key={val.id}
      id={val.id} 
      remove={remove} 
      top={val.topText} 
      bot={val.botText} 
      img={val.imgUrl} />
});

return (
  <div className="MemeList">
    {memeList}
  </div>
)
}

export default MemeList;