import { useForm } from "react-hook-form";
import { edadValidator } from "../components/validators";

const Registro = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  const Phone = watch("Phone");

  return (
    <div>
      <div>
        <h2>
          Registrate aquí
          <img
            src="https://cdn-icons-png.flaticon.com/512/3148/3148327.png"
            width="50px"
            className="flecha"
            alt="flecha de color celeste"
          />
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input
            id="txtpas"
            style={{ textAlign: "center" }}
            type="text"
            {...register("nombre", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p>El campo nombre es requerido</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p>El campo nombre debe tener menos de 10 caracteres</p>
          )}
        </div>
        <div>
          <label>Apellidos</label>
          <input
            type="text"
            id="txtpas"
            style={{ textAlign: "center" }}
            {...register("Apellidos", {
              required: true,
              maxLength: 20,
            })}
          />
        </div>
        <div>
          <label>Nickname</label>
          <input
            type="text"
            id="txtpas"
            style={{ textAlign: "center" }}
            {...register("Nickname", {
              required: true,
              maxLength: 10,
            })}
          />
        </div>
        <div>
          <label>Rut</label>
          <input
            type="text"
            id="txtpas"
            style={{ textAlign: "center" }}
            {...register("Rut", {
              required: true,
            })}
          />
        </div>
        <div>
          <label>Edad</label>
          <input
            type="text"
            id="txtpas"
            style={{ textAlign: "center" }}
            {...register("edad", {
              validate: edadValidator,
            })}
          />
          {errors.edad && (
            <p>Tienes que tener más de 18 años para registrarte</p>
          )}
        </div>
        <div>
          <label>Dirección</label>
          <input
            type="text"
            id="txtpas"
            style={{ textAlign: "center" }}
            {...register("Dirección", {
              required: true,
            })}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            id="txtpas"
            style={{ textAlign: "center" }}
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p>El formato del email es incorrecto</p>
          )}
        </div>

        <div>
          <label>Phone</label>
          <input type="text" {...register("Phone")} />
        </div>
        {Phone && (
          <div>
            <label>Teléfono</label>
            <input
              type="text"
              id="txtpas"
              style={{ textAlign: "center" }}
              {...register("telefono")}
            />
          </div>
        )}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Registro;
