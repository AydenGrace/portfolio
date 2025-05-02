import toast from "react-hot-toast";

export const sendContactForm = async (values) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/contact/send`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    if (response.ok) {
      toast.success("Votre message a bien été envoyé !");
      setFeedback(response.status);
      if (response.status === 200) reset(defaultValues);
    } else {
      toast.error("une erreur est survenue !");
    }
  } catch (error) {
    console.error(error);
  }
};
