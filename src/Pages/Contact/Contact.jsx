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

  const textFieldStyles = {
    input: { color: "black" }, 
    label: { color: "#555" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#ccc" },
      "&:hover fieldset": { borderColor: "black" },
      "&.Mui-focused fieldset": { borderColor: "black" },
    },
    ".dark &": {
      input: { color: "white" },
      label: { color: "#d1d5db" },
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "#666" },
        "&:hover fieldset": { borderColor: "white" },
        "&.Mui-focused fieldset": { borderColor: "white" },
      },
    },
  };

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
            {...register("name", { required: "Name is required" })}
            placeholder="Enter Your Name"
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={textFieldStyles}
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
            sx={textFieldStyles}
          />

          {/* Subject */}
          <TextField
            label="Subject"
            variant="outlined"
            {...register("subject", { required: "Subject is required" })}
            placeholder="Subject"
            error={!!errors.subject}
            helperText={errors.subject?.message}
            sx={textFieldStyles}
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
            sx={textFieldStyles}
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
