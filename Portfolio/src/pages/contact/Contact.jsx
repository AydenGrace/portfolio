import React, {useState} from "react";
import style from "./Contact.module.scss";
import {Link} from "react-router-dom";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {sendContactForm} from "../../api/contact";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const schema = yup.object({
    name: yup.string().required("Veuillez indiquer un nom d'utilisateur."),
    email: yup
      .string()
      .email()
      .required("Veillez indiquer une adresse email.")
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        "Veuillez indiquer une adresse email valide."
      ),
    message: yup.string().required("Veuillez indiquer un message à envoyer."),

    rgpd: yup
      .boolean()
      .oneOf([true], "Veuillez accepter les termes et conditions."),
  });

  const [captcha, setCaptcha] = useState(false);
  const [captchaError, setCaptchaError] = useState(null);

  const defaultValues = {
    name: "",
    email: "",
    message: "",
    rgpd: false,
  };

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const submit = (values) => {
    console.log(values);
    if (!captcha) {
      setCaptchaError("Veillez remplir le CAPTCHA.");
      return;
    }
    setCaptchaError(null);
    //SEND TO BACKEND FOR EMAIL CREATION
    sendContactForm(values);
    reset(defaultValues);
  };

  const captChange = (e) => {
    if (e) setCaptcha(true);
  };

  const resetCaptcha = () => {
    setCaptcha(null);
  };

  return (
    <main className="w-full min-h-screen flex flex-col z-10">
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-[10%] sm:px-[20%] text-center">
        <h1 className=" text-5xl sm:text-8xl md:text-[104px] text-secondary font-(family-name:--title-font-family) md:leading-[104px]">
          ENVIE DE PARLER D'UN PROJET ?
        </h1>
        <p className="text-3xl sm:text-[40px] font-(family-name:--title-font-family)">
          Je serai ravi de lire votre message !
        </p>
      </section>
      <form
        className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-[20%] text-center gap-4 mb-4"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col w-full items-center mb-4 gap-4">
          <h2 className="text-[40px] leading-[40px] text-secondary font-(family-name:--title-font-family)">
            FORMULAIRE DE CONTACT{" "}
          </h2>
          <div className="separatorLine max-w-[500px]"></div>
        </div>
        {/* INPUT AREA */}
        <div className="flex flex-col items-start gap-1 w-full max-w-[700px]">
          {" "}
          <label htmlFor="name" className="">
            Votre nom <span className="text-red-400">*</span>
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            autoComplete="name"
            className="bg-[#252525] rounded-lg w-full text-text border-text/50 border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-secondary min-w-[300px] placeholder:opacity-60 placeholder:italic"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        {/* INPUT AREA */}
        <div className="flex flex-col items-start gap-1 w-full max-w-[700px]">
          {" "}
          <label htmlFor="email" className="">
            Votre email <span className="text-red-400">*</span>
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            autoComplete="email"
            className="bg-[#252525] rounded-lg w-full text-text border-text/50 border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-secondary min-w-[300px]  placeholder:opacity-60 placeholder:italic"
            placeholder="john.doe@gmail.com"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        {/* INPUT AREA */}
        <div className="flex flex-col items-start gap-1 w-full max-w-[700px]">
          {" "}
          <label htmlFor="message" className="">
            Votre message <span className="text-red-400">*</span>
          </label>
          <textarea
            {...register("message")}
            id="message"
            autoComplete="email"
            className="bg-[#252525] rounded-lg w-full text-text border-text/50 border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-secondary min-w-[300px] placeholder:opacity-60 placeholder:italic min-h-[150px]"
            placeholder="J'ai un projet en tête..."
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* INPUT AREA */}
        <div className="flex flex-col w-full max-w-[700px] text-left">
          <div className="relative flex items-start gap-2 w-full max-w-[700px] text-left text-primary">
            {" "}
            <input
              {...register("rgpd")}
              type="checkbox"
              id="rgpd"
              value={""}
              className={`mt-1 relative peer appearance-none min-w-4 min-h-4 bg-[#252525] rounded border border-text cursor-pointer text-secondary checked:bg-secondary checked:text-primary before:checked:content-[2714] before:checked:absolute before:checked:right-[1px] before:checked:top-[-5px] before:checked:text-primary ${style.check}`}
            />
            <label htmlFor="rgpd" className="text-text">
              J’accepte que mes coordonnées soit utilisées dans le cadre de ma
              demande et d'une relation commerciale personnalisée, notamment par
              e-mail. <span className="text-red-400">*</span>
            </label>
          </div>
          {errors.rgpd && <p className="text-red-500">{errors.rgpd.message}</p>}
        </div>
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_CAPTCHA_KEY_SITE}
          theme="dark"
          onChange={captChange}
          onExpired={resetCaptcha}
          onErrored={resetCaptcha}
        />
        {captchaError && <p className="text-red-500">{captchaError}</p>}
        <div className="w-full flex items-center justify-center">
          <input
            type="submit"
            className="bg-[#505455] p-2.5 px-4 rounded-lg mt-2 font-(family-name:--title-font-family) cursor-pointer hover:bg-[#303435]"
            value={"ENVOYER VOTRE MESSAGE"}
          />
        </div>
      </form>
    </main>
  );
}
