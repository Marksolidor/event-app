import React, { useState } from 'react';
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Form, Input, DatePicker, TimePicker, Select} from 'antd';
import ButtonAddEvent from '../components/ButtonAddEvent';
import '../components/styleCrearEvento.css';



const { Option } = Select;

const EventForm = () => {
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
address: ''
});


// Función para manejar los cambios en los campos del formulario
const handleInputChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

// Función para manejar los cambios en el campo de fecha del formulario
const handleDateChange = (date, dateString) => {
setFormData({ ...formData, date: dateString });
};

// Función para manejar los cambios en el campo de hora del formulario
const handleTimeChange = (time, timeString) => {
setFormData({ ...formData, time: timeString });
};

// Función para manejar los cambios en el campo de fotos del formulario
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

// Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí podrías enviar los datos del evento a una API o guardarlos en una base de datos
  };


return (
<div className='container text-center' style={{ maxWidth: "700px" }}>
<h1>Crea tu Evento</h1>
<Form onFinish={handleSubmit}>
<Form.Item label="Nombre del evento">
<Input name="name" onChange={handleInputChange} />
</Form.Item>
<Form.Item label="Agregar fotos al evento">
<Upload
         name="photos"
         listType="picture-card"
         showUploadList={false}
         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
         onChange={handlePhotoChange}
       >
{formData.photos.length === 0 ? (
<div>
<UploadOutlined />
<div style={{ marginTop: 8 }}>Subir fotos</div>
</div>
) : null}
{formData.photos.map((photo) => (
<img
src={photo.url}
key={photo.uid}
alt={photo.name}
style={{ width: '100%' }}
/>
))}
</Upload>
</Form.Item>
<Form.Item label="Tipo de evento">
<Select name="type" onChange={handleInputChange}>
<Option value="concierto">Concierto</Option>
<Option value="festival">Festival</Option>
<Option value="obra-teatro">Obra de teatro</Option>
<Option value="cine">Cine</Option>
<Option value="deporte">Deporte</Option>
</Select>
</Form.Item>
            <Form.Item label="Fecha">
                <DatePicker onChange={handleDateChange} />
            </Form.Item>
            <Form.Item label="Hora">
                <TimePicker onChange={handleTimeChange} />
                </Form.Item>
                <Form.Item label="Descripción">
  <Input name="description" onChange={handleInputChange} />
</Form.Item>
<Form.Item label="Precio">
  <Input name="price" onChange={handleInputChange} />
</Form.Item>
<Form.Item label="Región">
  <Select name="región" onChange={handleInputChange}>
    <Option value="Región de Arica y Parinacota">Región de Arica y Parinacota</Option>
    <Option value="Región de Tarapacá">Región de Tarapacá</Option>
    <Option value="Región de Antofagasta">Región de Antofagasta</Option>
    <Option value="Región de Atacama">Región de Atacama</Option>
                        <Option value="Región de Coquimbo">Región de Coquimbo</Option>
                        <Option value="Región de Valparaíso">Región de Valparaíso</Option>
                        <Option value="Región Metropolitana de Santiago">Región Metropolitana de Santiago</Option>
                        <Option value="Región del Libertador General Bernardo O'Higgins">Región del Libertador General Bernardo O'Higgins</Option>
                        <Option value="Región del Maule">Región del Maule</Option>
                        <Option value="Región del Biobío">Región del Biobío</Option>
                        <Option value="Región de La Araucanía">Región de La Araucanía</Option>
                        <Option value="Región de Los Ríos">Región de Los Ríos</Option>
                        <Option value="Región de Los Lagos">Región de Los Lagos</Option>
                        <Option value="Región de Aysén del General Carlos Ibáñez del Campo">Región de Aysén del General Carlos Ibáñez del Campo</Option>
                        <Option value="Región de Magallanes y de la Antártica Chilena">Región de Magallanes y de la Antártica Chilena</Option>
  </Select>
</Form.Item>
<Form.Item label="Comuna">
  <Input name="comuna" onChange={handleInputChange} />
</Form.Item>
<Form.Item label="Dirección">
  <Input name="address" onChange={handleInputChange} />
            </Form.Item>

        </Form>
        <div>
      <div onSubmit={handleSubmit}>
        <ButtonAddEvent onClick={handleSubmit} />
      </div>
    </div>

            </div>)
};export default EventForm;
