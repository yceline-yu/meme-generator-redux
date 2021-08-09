import { useState } from "react";
import "./MemeForm.css";

/** MemeForm
 * 
 * Props:
 * - handleSave();
 * 
 * State:
 * - formData
 * 
 * App -> MemeForm
 */
function MemeForm({ handleSave }) {
  const initialState = {topText:"", botText: "", imgUrl: ""}
  const [formData, setFormData] = useState(initialState);

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target
    setFormData(currData => ({ ...currData, [name]: value }));
  };

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSave(formData);
    setFormData(initialState);
  }

  return (
    <form className="MemeForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          id="MemeForm-topText"
          name="topText"
          className="form-control"
          placeholder="Top Text"
          onChange={handleChange}
          value={formData.topText}
          aria-label="top-text"
        />
      </div>

      <div className="form-group">
        <input
          id="MemeForm-botText"
          name="botText"
          className="form-control"
          placeholder="Bottom Text"
          onChange={handleChange}
          value={formData.botText}
          aria-label="bot-text"
        />
      </div>

      <div className="form-group">
        <input
          id="MemeForm-imgUrl"
          name="imgUrl"
          className="form-control"
          placeholder="Image URL"
          onChange={handleChange}
          value={formData.imgUrl}
          aria-label="image-url"
        />
      </div>

      <button className="MemeForm-button">
          Add
          </button>
    </form >
  )
}

export default MemeForm;