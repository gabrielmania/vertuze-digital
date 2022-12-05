import FormInput from "../components/FormInput";

export default function Contact() {
  return (
    <>
      <div className="h-screen w-full bg-contact bg-center bg-cover flex justify-center">
        <h2 className="text-8xl 2xl:text-super text-slate-400 self-center 2xl:self-start mt-0 xl:mt-20">Contact Us</h2>
      </div>
      <div className="h-screen w-full flex justify-center items-center bg-slate-300">
        <form className="border shadow-lg rounded-lg h-6/12 w-9/12 sm:w-8/12 xl:w-6/12 2xl:w-5/12 p-10 bg-white flex justify-center items-center flex-col">
          <FormInput
            type="text"
            label="Your Name"
            id="fullName"
            name="fullName"
          />
          <FormInput type="text" label="Your Email" id="email" name="email" />
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-32"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button className="btn btn-warning bg-primary mt-5">Submit</button>
        </form>
      </div>
    </>
  );
}
