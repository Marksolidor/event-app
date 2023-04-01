import { useState } from 'react';

const useForm = (callback) => {
  const [formData, setFormData] = useState({
    name: '',
    photos: [],
    type: '',
    date: null,
    time: null,
    description: '',
    price: '',
    region: '',
    comuna: '',
    address: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, dateString) => {
    setFormData({ ...formData, date: dateString });
  };

  const handleTimeChange = (time, timeString) => {
    setFormData({ ...formData, time: timeString });
  };

  const handlePhotoChange = (info) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-3);
    fileList = fileList.map((file) => ({
      uid: file.uid,
      name: file.name,
      status: file.status,
      url: file.response ? file.response.url : file.url,
    }));
    setFormData({ ...formData, photos: fileList });
  };

  return {
    formData,
    handleSubmit,
    handleInputChange,
    handleDateChange,
    handleTimeChange,
    handlePhotoChange,
  };
};

export default useForm;