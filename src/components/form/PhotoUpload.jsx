import React, { useState, useRef } from 'react';
import '../../styles/ui/PhotoUpload.css';
import icEditPhoto from '../../assets/ic_edit_photo.svg';
import icRemovePhoto from '../../assets/ic_remove_photo.svg';

export default function PhotoUpload({ name, control, setPhotoPreview }) {
  const [localPreview, setLocalPreview] = useState(null);
  const { setValue } = control;
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLocalPreview(url);
      setPhotoPreview(url);
      setValue(name, file, { shouldValidate: false });
    }
  };

  const handleEdit = () => {
    setLocalPreview(null);
    setValue(name, null, { shouldValidate: false });
    setPhotoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDelete = () => {
    setLocalPreview(null);
    setValue(name, null, { shouldValidate: false });
    setPhotoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleCustomButtonClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  return (
    <div className="photo-upload">
      <div className="photo-container">
        {localPreview && <img src={localPreview} alt="Фото профиля" className="photo-preview" />}
        {!localPreview && (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
            <button className="custom-upload-button" onClick={handleCustomButtonClick}>
              Выбрать файл
            </button>
          </>
        )}
        {localPreview && (
          <div className="photo-actions">
            <button className="photo-action edit" onClick={handleEdit} aria-label="Edit photo">
              <img src={icEditPhoto} alt="Edit photo" className="action-icon" />
            </button>
            <button className="photo-action delete" onClick={handleDelete} aria-label="Delete photo">
              <img src={icRemovePhoto} alt="Remove photo" className="action-icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}