import { useForm } from "react-hook-form";
import HeadingPage from "../../Components/HeadingPage/HeadingPage";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully ");
          reset();
        },
        () => {
          alert("Failed to send ");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="px-3 flex flex-col gap-12">
      <HeadingPage title="Contact Me" />

      <div data-aos="fade-left" className="w-full dark:text-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 sm:w-2/3 lg:w-1/3 mx-auto"
        >
          {/* Name */}
          <TextField
            label="Name"
            variant="outlined"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter Your Name"
            error={!!errors.name}
            helperText={errors.name?.message}
            className="dark:[&_.MuiOutlinedInput-root]:text-white 
                       dark:[&_.MuiInputLabel-root]:text-gray-300 
                       dark:[&_.MuiOutlinedInput-notchedOutline]:border-gray-600"
          />

          {/* Email */}
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter Your Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            className="dark:[&_.MuiOutlinedInput-root]:text-white 
                       dark:[&_.MuiInputLabel-root]:text-gray-300 
                       dark:[&_.MuiOutlinedInput-notchedOutline]:border-gray-600"
          />

          {/* Subject */}
          <TextField
            label="Subject"
            variant="outlined"
            {...register("subject", { required: "Subject is required" })}
            placeholder="Subject"
            error={!!errors.subject}
            helperText={errors.subject?.message}
            className="dark:[&_.MuiOutlinedInput-root]:text-white 
                       dark:[&_.MuiInputLabel-root]:text-gray-300 
                       dark:[&_.MuiOutlinedInput-notchedOutline]:border-gray-600"
          />

          {/* Message */}
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            {...register("message", { required: "Message is required" })}
            placeholder="Message"
            error={!!errors.message}
            helperText={errors.message?.message}
            className="dark:[&_.MuiOutlinedInput-root]:text-white 
                       dark:[&_.MuiInputLabel-root]:text-gray-300 
                       dark:[&_.MuiOutlinedInput-notchedOutline]:border-gray-600"
          />

          {/* Submit */}
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
}
