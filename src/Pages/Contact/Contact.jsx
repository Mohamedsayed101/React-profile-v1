import { useForm } from "react-hook-form";
import HeadingPage from "../../Components/HeadingPage/HeadingPage";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="px-3 flex flex-col gap-19">
      <HeadingPage title="Contact Me" />

      <div data-aos="fade-left" className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 sm:w-2/3 lg:w-1/3 mx-auto"
        >
          {/* Name */}
          <TextField
            label="Name"
            variant="outlined"
            {...register("name", { required: true })}
            placeholder="Enter Your Name"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">Name is required</span>
          )}

          {/* Email */}
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}

          {/* Subject */}
          <TextField
            label="Subject"
            variant="outlined"
            type="text"
            {...register("subject", { required: true })}
            placeholder="Subject"
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">Subject is required</span>
          )}

          {/* Message */}
          <TextField
            label="Message"
            multiline
            rows={4}
            {...register("message", { required: true })}
            placeholder="Message"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">Message is required</span>
          )}

          {/* Submit */}
          <Button
            type="submit"
            variant="contained"
            className="self-center mt-2"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
