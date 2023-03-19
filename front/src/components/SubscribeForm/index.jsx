import { useForm } from "react-hook-form";

export default function SubscribeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="subscribe-form">
      <div>
        <input
          type="text"
          id="email"
          placeholder="Write your email here"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/i,
          })}
        />

        {!errors.email && (
          <button type="submit">
            <img
              src="./email.svg"
              alt="email-icon"
              className="subscribe-button"
            />
          </button>
        )}
      </div>
      {errors.email && <p>Wrong email pattern</p>}
    </form>
  );
}
