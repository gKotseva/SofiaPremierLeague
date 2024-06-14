
import './ImageModal.modules.css'

export default function ImageModal({isOpen, onClose, path}) {

    if (!isOpen) {
        return null;
    }


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
        &#10005;
        </span>
        <img src={path} alt="article-cover" className='modalImage'/>
      </div>
    </div>
  );
}