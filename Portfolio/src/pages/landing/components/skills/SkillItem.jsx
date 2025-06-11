import {Link} from "react-router-dom";

export default function SkillItem({skill}) {
  return (
    <Link
      to={skill.link}
      target="_blank"
      className={`relative w-[260px] h-[50px] rounded-xl mt-2.5 flex items-center justify-center bg-center bg-cover !text-text !visited:text-text cursor-pointer  hover:shadow hover:shadow-white/50 overflow-hidden`}
      style={{backgroundImage: `url("${skill.background}")`}}
    >
      <div className="w-full flex h-full items-center gap-2.5 bg-black/80 p-2.5 pl-11 ">
        <img src={skill.icon} alt={skill.title} width={"40px"} />
        <p className="!cursor-pointer">{skill.title}</p>
      </div>
    </Link>
  );
}
