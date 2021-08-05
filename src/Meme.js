import "./Meme.css";

function Meme({ id, top, bot, img, remove }) {
  function handleDelete() {
    remove({id});
  }
  return (
    <div className="Meme" onClick={ handleDelete }>
      <div className="Meme-top">
        {top}
      </div>
      <img className="Meme-img" src={img} alt="meme"/>
      <div className="Meme-bot">
        {bot}
        </div>
    </div>
  )
}

export default Meme;