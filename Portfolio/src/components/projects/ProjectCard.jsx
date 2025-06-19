import {Link} from "react-router-dom";
// import Magnet from "../bits/Magnet";

export default function ProjectCard({
  project = {
    title: "Test",
    img: "https://media.discordapp.net/attachments/1337138364020953212/1376818499963453472/image.png?ex=6843e4a6&is=68429326&hm=465a152b8eafa0affb9b3ce5f77852c7246ddc15a8a23b8efa4fff9bdae77667&=&format=webp&quality=lossless",
    categories: ["Test1", "Test2"],
    link: "test",
    isExternalLink: false,
  },
}) {
  let catLabel = "";
  for (let i = 0; i < project.categories.length; i++) {
    catLabel += project.categories[i];
    if (i != project.categories.length - 1) catLabel += ", ";
  }

  return (
    // <Magnet magnetStrength={150} disabled={false}>
    <Link to={project.link} target={project.isExternalLink ? "_blank" : ""}>
      <article className="card  flex-col flex w-[300px] h-[350px] rounded-2xl bg-antracite overflow-hidden hover:shadow hover:shadow-white/50">
        <div
          className="flex flex-1 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${project.img})`,
          }}
        ></div>
        <div className="flex flex-col w-full items-center justify-center text-center py-4 px-1">
          <h3 className="text-secondary !cursor-pointer font-(family-name:--title-font-family) uppercase text-lg">
            {project.title}
          </h3>
          <figure className="separatorSubline" />
          <p className="text-white/50 !cursor-pointer">{catLabel}</p>
        </div>
      </article>
    </Link>
    // </Magnet>
  );
}
