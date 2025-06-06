import React, {useEffect, useState} from "react";

export default function Burger() {
  const [open, setOpen] = useState(false);

  const toggleBurger = () => {
    setOpen((current) => !current);
  };

  useEffect(() => {
    if (open) {
    }
  }, [open]);
  return (
    <div
      className={`flex flex-col gap-1 cursor-pointer`}
      onClick={toggleBurger}
    >
      <figure
        id="BurgerTopLine"
        className="w-7 h-1 rounded-2xl bg-secondary"
      ></figure>
      <figure
        id="BurgerMiddleLine"
        className="w-7 h-1 rounded-2xl bg-secondary"
      ></figure>
      <figure
        id="BurgerBottomLine"
        className="w-7 h-1 rounded-2xl bg-secondary"
      ></figure>
    </div>
  );
}
