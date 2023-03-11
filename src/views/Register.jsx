import { useForm } from "react-hook-form";

const Registro = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    
<form  onSubmit={handleSubmit(onSubmit)} className="row g-3">
<div className="col-md-6">
    <label for="inputName" className="form-label">Nombre</label>
    <input type="text" className="form-control"  {...register("nombre", {
            required: true,
              maxLength: 10,
            })}/>
            {errors.nombre?.type === "required" && (
            <p>El campo nombre es requerido</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p>El campo nombre debe tener menos de 10 caracteres</p>
          )}
  </div>
  <div className="col-md-6">
    <label for="inputName" className="form-label">Apellidos</label>
    <input type="text" className="form-control" {...register("Apellidos", {
               required: true,
              maxLength: 20,
             })}/>
  </div>
  <div className="col-md-6">
    <label for="inputNick" className="form-label">Nickname</label>
    <input type="text" className="form-control" 
    {...register("Nickname", {
                    required: true,
                 maxLength: 10,
               })}/>
  </div>
  
  <div className="col-md-6">
    <label for="inputRut" className="form-label">Rut</label>
    <input type="text" className="form-control" id="inputRut" {...register("Rut", {
               required: true,
             })}/>
  </div>

  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" />
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>

  );
 };

export default Registro;
