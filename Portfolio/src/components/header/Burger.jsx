import React, {useEffect, useState} from "react";

export default function Burger() {
  const [open, setOpen] = useState(false);

  const topLine = document.getElementById("BurgerTopLine");
  const middleLine = document.getElementById("BurgerMiddleLine");
  const bottomLine = document.getElementById("BurgerBottomLine");

  const toggleBurger = async () => {
    setOpen((current) => !current);
  };

  useEffect(() => {
    if (!topLine || !middleLine || !bottomLine) return;

    if (open) {
      topLine.style.transform = "translateY(6.5px) rotate(45deg)";
      middleLine.style.height = "0px";
      bottomLine.style.transform = "translateY(-6px) rotate(-45deg)";
    } else {
      topLine.style.transform = "translateY(0px) rotate(0deg)";
      middleLine.style.height = "4px";
      bottomLine.style.transform = "translateY(0px) rotate(0deg)";
    }
  }, [open]);
  return (
    <div
      className={`flex flex-col gap-1 z-50 cursor-pointer`}
      onClick={toggleBurger}
    >
      <figure
        id="BurgerTopLine"
        className="animated w-7 h-1 rounded-2xl bg-secondary"
      ></figure>
      <figure
        id="BurgerMiddleLine"
        className="animated w-7 h-1 rounded-2xl bg-secondary"
      ></figure>
      <figure
        id="BurgerBottomLine"
        className="animated w-7 h-1 rounded-2xl bg-secondary"
      ></figure>
    </div>
  );
}
