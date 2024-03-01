import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import * as Scene1 from "../../data/LOADING1.json";
import * as Scene2 from "../../data/LOADING3.json";
import './preloading.scss';

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: Scene1.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: Scene2.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function PreLoader() {
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const delayTimer1 = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const delayTimer2 = setTimeout(() => {
      setCompleted(true);
    }, 5000);

    return () => {
      clearTimeout(delayTimer1);
      clearTimeout(delayTimer2);
    };
  }, []);

  return (
    <>
      {!completed && (
        <>
          {!loading ? (
            <Lottie options={defaultOptions1} height={250} width={250} />
          ) : (
            <Lottie options={defaultOptions2} height={200} width={200} />
          )}
        </>
      )}
    </>
  );
}
