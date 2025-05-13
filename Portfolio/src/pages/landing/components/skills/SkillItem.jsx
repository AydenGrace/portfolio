export default function SkillItem({ skill }) {
  return (
    <div
      className={`w-[260px] h-[50px] rounded-xl mt-2.5 flex items-center justify-center bg-center bg-cover`}
      style={{ backgroundImage: `url("${skill.background}")` }}
    >
      <div className="w-full flex items-center gap-2.5 bg-black/75 p-2.5 pl-11 cursor-default">
        <img src={skill.icon} alt={skill.title} height={"40px"} />
        <p>{skill.title}</p>
      </div>
    </div>
  );
}
