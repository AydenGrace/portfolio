import React from "react";

export default function Separator({ number = 1 }) {
  function romanize(num) {
    if (isNaN(num)) return NaN;
    var digits = String(+num).split(""),
      key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
      ],
      roman = "",
      i = 3;
    while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  }
  return (
    <div className="w-100 d-flex g-20">
      <div className="d-flex flex-fill align-items-center justify-content-end">
        <div className="separatorLine"></div>
      </div>
      <div className="separatorCenter">
        <div className="f-center rotatedSeparatorCenter">
          <p>{romanize(number)}</p>
        </div>
      </div>
      <div className="d-flex flex-fill  align-items-center justify-content-start">
        <div className="separatorLine"></div>
      </div>
    </div>
  );
}
