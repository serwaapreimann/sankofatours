import React from "react";
import "./about.scss";
export default function About() {
  return (
    <section className="about--section" id="about">
      <h1 className="about--title">about SANKOFA</h1>
      <div className="about--sankofa">
          <p className="about--sankofa-1">
            At Sankofa, we are committed to facilitating meaningful connections
            with the rich and diverse cultures, landscapes, and experiences of
            Africa. Our mission is to inspire and empower travelers to embark on
            transformative journeys that honor the past, embrace the present,
            and shape the future. Through curated travel experiences,
            sustainable practices, and authentic encounters, we aim to foster
            mutual understanding, appreciation, and respect for the continent's
            heritage and people.
          </p>
            <p className="about--sankofa-2">
              Embark with us on a voyage of discovery, where every moment is an
              opportunity to learn, grow, and make a difference. Whether you're
              exploring ancient ruins, encountering wildlife in their natural
              habitat, or connecting with local artisans, each experience with
              Sankofa leaves an indelible mark on your soul. Join us as we journey
              across vast savannas, traverse dense rainforests, and navigate
              bustling cityscapes, uncovering the magic and mystery of Africa at
              every turn.
            </p>      
      </div>
    </section>
  );
}
