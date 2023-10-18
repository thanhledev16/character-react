import React from "react";
import Part from "./Part";

function Avatar({
  body,
  hair,
  eyes,
  eyebrows,
  noses,
  mouths,
  facial_hair,
  clothing1,
  clothing2,
  clothing3,
  earrings,
  glasses,
  hats,
  neckwear,
}) {
  return (
    <div className="avatar">
      <Part path="body" index={body} zIndex={0} />
      <Part path="clothes/layer_1" index={clothing1} zIndex={1} />
      <Part path="clothes/layer_2" index={clothing2} zIndex={2} />
      <Part path="clothes/layer_3" index={clothing3} zIndex={3} />
      <Part path="facial_hair" index={facial_hair} zIndex={4} />
      <Part path="eyes" index={eyes} zIndex={5} />
      <Part path="eyebrows" index={eyebrows} zIndex={6} />
      <Part path="noses" index={noses} zIndex={7} />
      <Part path="mouths" index={mouths} zIndex={8} />
      <Part path="hair" index={hair} zIndex={9} />
      <Part path="accessories/earrings" index={earrings} zIndex={10} />
      <Part path="accessories/glasses" index={glasses} zIndex={11} />
      <Part path="accessories/hats" index={hats} zIndex={12} />
      <Part path="accessories/neckwear" index={neckwear} zIndex={13} />
    </div>
  );
}

export default Avatar;
