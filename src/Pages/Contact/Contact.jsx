import { useForm } from "react-hook-form";
import HeadingPage from "../../Components/HeadingPage/HeadingPage";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="px-3 flex flex-col gap-19">
        <HeadingPage title="Contact Me" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2.5 w-1/3 mx-auto"
        >
          <input
            {...register("name", { required: true })}
            placeholder="Enter Your Name"
            className="p-2.5"
          />
          {errors.name && <span>Name is required</span>}

          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter Your Email"
            className="p-2.5"
          />
          {errors.email && <span>Email is required</span>}

          <input
            type="text"
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="p-2.5"
          />
          <textarea name="message" id="message" placeholder="Message" className="p-2.5"/>
          {errors.email && <span>Email is required</span>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
