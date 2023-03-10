import { useForm } from "react-hook-form";
import { edadValidator } from "./validators";

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
    
<form  onSubmit={handleSubmit(onSubmit)} class="row g-3">
<div class="col-md-6">
    <label for="inputName" class="form-label">Nombre</label>
    <input type="text" class="form-control"  {...register("nombre", {
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
  <div class="col-md-6">
    <label for="inputName" class="form-label">Apellidos</label>
    <input type="text" class="form-control" {...register("Apellidos", {
               required: true,
              maxLength: 20,
             })}/>
  </div>
  <div class="col-md-6">
    <label for="inputNick" class="form-label">Nickname</label>
    <input type="text" class="form-control" 
    {...register("Nickname", {
                    required: true,
                 maxLength: 10,
               })}/>
  </div>
  
  <div class="col-md-6">
    <label for="inputRut" class="form-label">Rut</label>
    <input type="text" class="form-control" id="inputRut" {...register("Rut", {
               required: true,
             })}/>
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>

  );
 };

export default Registro;
