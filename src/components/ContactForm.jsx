function ContactForm() {
  return (
    <>
      <form className="flex items-center flex-col m-4 p-5 ">
        <fieldset className="fieldset">
          <legend className="font-bold text-2xl">Contact us here</legend>
          <label className="fieldset-legend">Your name:</label>
          <input type="text" className="input" />
          <label className="fieldset-legend">Your E-Mail:</label>
          <input type="email" className="input" />
          <label className="fieldset-legend">Your message:</label>
          <textarea type="textarea" className="textarea" />
          <button className="btn mt-2 btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            SUBMIT
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default ContactForm;
