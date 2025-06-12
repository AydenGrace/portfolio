import {useScroll} from "framer-motion";
import React, {useEffect, useState} from "react";

export default function TechBadge({
  isFigma = false,
  isPhotoshop = false,
  isIllustrator = false,
  isInDesign = false,
  isPremierePro = false,
  isReact = false,
  isJS = false,
  isHTML = false,
  isCSS = false,
  isSASS = false,
  isTailwind = false,
  isDocker = false,
  isPostman = false,
  isFirebase = false,
  isSupabase = false,
  isMongoDB = false,
  isSQL = false,
  isPostgre = false,
  isNode = false,
  isSpringBoot = false,
  isJava = false,
  isWordpress = false,
}) {
  const [color, setColor] = useState("white");
  const [text, setText] = useState("error");
  const [icon, setIcon] = useState(
    "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//unknown-icon-2048x1351-cv8bif9l.webp"
  );

  useEffect(() => {
    if (isFigma)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FFigma-min.webp?alt=media&token=c1b828db-b3e8-43b7-b535-c2ebc03292d0",
        "Figma",
        "stone-600"
      );

    if (isPhotoshop)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FAdobe%20Photoshop-min.webp?alt=media&token=ecea22b2-92f7-4dcf-aa79-570226884108",
        "Adobe Photoshop",
        "sky-500"
      );

    if (isIllustrator)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FAdobe%20Illustrator-min.webp?alt=media&token=a9bef1e0-3ea5-4434-b1bf-c370131f49eb",
        "Adobe Illustrator",
        "orange-700"
      );

    if (isInDesign)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FAdobe%20Indesign-min.webp?alt=media&token=4863bbca-3137-4490-8ffc-2418dab633d2",
        "Adobe inDesign",
        "pink-700"
      );

    if (isPremierePro)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FAdobe%20Premiere%20Pro-min.webp?alt=media&token=36c9177f-92c1-4bd6-91b0-ffbea6003177",
        "Adobe Premiere Pro",
        "fuchsia-600"
      );

    if (isReact)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FReact-min.webp?alt=media&token=4cff18a2-167a-4775-9f29-6115432161b7",
        "React",
        "cyan-500"
      );

    if (isJS)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FJavaScript-min.webp?alt=media&token=3291eed8-66f5-4994-b7f2-74ff7fdba441",
        "JavaScript",
        "amber-300"
      );

    if (isHTML)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FHtml%205-min.webp?alt=media&token=eebe10b5-4c83-475e-8b37-e6ef99b24d6c",
        "HTML 5",
        "orange-600"
      );

    if (isCSS)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FCSS3-min.webp?alt=media&token=2c17d19c-e602-4324-969b-e398edbcf129",
        "CSS 3",
        "sky-500"
      );

    if (isSASS)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FSass-Avatar-min.webp?alt=media&token=d9053c29-26fb-4a13-bca5-538db03a88a7",
        "SASS",
        "pink-400"
      );

    if (isTailwind)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2Ftailwind.webp?alt=media&token=e8893b01-8328-4abd-bd03-6b3e4affb4d0",
        "TailwindCSS",
        "cyan-500"
      );

    if (isDocker)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FDocker-min.webp?alt=media&token=6ca1b49d-0128-43c1-a0e7-9aab421734ab",
        "Docker",
        "sky-800"
      );

    if (isPostman)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FPostman%20Api-min.webp?alt=media&token=72917c0c-54fa-44c3-b60e-4507b99d844a",
        "Postman",
        "fuchsia-400"
      );

    if (isFirebase)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FFirebase-min.webp?alt=media&token=13e498fa-c0c9-4a92-b6ca-eb91824d4ab1",
        "Firebase",
        "amber-400"
      );
    if (isSupabase)
      return setDatas(
        "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//supabase.svg",
        "Supabase",
        "green-600"
      );

    if (isMongoDB)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FMongoDB-min.webp?alt=media&token=c9e97623-8023-4027-820a-59405ecadc6f",
        "MongoDB",
        "green-700"
      );
    if (isSQL)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FMy%20Sql-min.webp?alt=media&token=6b140cae-a0cf-413d-92dc-6592a456f1e5",
        "MySQL",
        "sky-800"
      );
    if (isPostgre)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FPostgre.webp?alt=media&token=3323db93-0534-4663-a69e-3e2a11a68a22",
        "PostgreSQL",
        "cyan-800"
      );
    if (isNode)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2Fnode-js-icon-1817x2048-g8tzf91e%201-min.webp?alt=media&token=81c2d332-4deb-436b-871b-ba2b86ff18d9",
        "Node.JS",
        "emerald-800"
      );

    if (isJava)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FJava-min.webp?alt=media&token=b4ee5762-5d36-403d-bc59-ec7da6a940cf",
        "Java",
        "red-800"
      );
    if (isSpringBoot)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2Fspring-boot-logo-1-1-min.webp?alt=media&token=946dec7d-2dac-4d3f-a422-da37d52f1d57",
        "Spring Boot",
        "lime-500"
      );
    if (isWordpress)
      return setDatas(
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FWordPress-min.webp?alt=media&token=eacea29a-ce16-403b-9063-d6723a2ed67c",
        "Wordpress",
        "cyan-400"
      );
  }, []);

  const setDatas = (icon, text, color) => {
    setIcon(icon);
    setText(text);
    setColor(color);
  };

  return (
    <div
      className={`flex items-center border-${color} border-2 text-text rounded-2xl px-2 py-1 text-sm gap-1`}
    >
      <img src={icon} alt={"Illustrator"} width={"20px"} />
      {text}
    </div>
  );
}
