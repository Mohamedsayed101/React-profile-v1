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
    <>
      <div className="px-3 flex flex-col gap-19">
        <HeadingPage title="Contact Me" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2.5 w-1/3 mx-auto"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            {...register("name", { required: true })}
            placeholder="Enter Your Name"
            className="p-2.5"
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter Your Email"
            className="p-2.5"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}

          <TextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            type="text"
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="p-2.5"
          />
          {errors.subject && (
            <span className="text-red-500">Subject is required</span>
          )}
          <TextField
            label="Message"
            multiline
            rows={4}
            name="message"
            id="message"
            placeholder="Message"
            className="p-2.5"
          />
          {errors.message && (
            <span className="text-red-500">Email is required</span>
          )}

          <Button type="submit" variant="outlined" className=" m-auto">
            Submit
          </Button>
          
        </form>
      </div>
    </>
  );
}
