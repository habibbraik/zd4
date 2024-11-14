import React from "react";
import Image from "next/image";
import AquaWolfPFP from "@/public/images/svg/aquawolf-pfp.svg";

export default function Letter() {
  return (
    <div className="relative px-5 lg:px-0">
      <h2 className="text-transparent">About Me</h2>
      <div className="relative">
        {/* Letter Bottom */}
        <div className="bg-letter-middle absolute left-0 top-0 z-10 h-full w-full -rotate-1 rounded-lg lg:-rotate-2"></div>
        {/* Letter Middle */}
        <div className="bg-letter-bottom absolute left-1 top-1 z-20 h-[98%] w-[98%] -rotate-1 rounded-lg lg:left-3 lg:top-10 lg:h-[95%] lg:w-[98%] lg:rotate-3"></div>
        {/* Letter Top */}
        <div className="bg-letter-top shadow-letter-top relative z-30 -rotate-1 rounded-lg lg:rotate-2 lg:rounded-xl">
        <article className="space-y-4 p-4 text-base text-white/80 lg:space-y-5 lg:p-5 lg:px-24 lg:py-14 lg:text-2xl">
  <p>Kara Slimane Lahcene Zakaria, connu sous le pseudonyme ZD4, est un artiste polyvalent de rap.</p>

  <p>Il gère l'intégralité de son processus créatif, de l'écriture des paroles à l'enregistrement et à l'ingénierie du son.</p>

  <p>Dans le domaine visuel, ZD4 excelle en scénarisation, tournage, montage et correction des couleurs, tout en ayant une expérience notable en production cinématographique.</p>

  <p>Fondateur d'une entreprise de production audiovisuelle indépendante, il crée des expériences visuelles et sonores captivantes.</p>
</article>

        </div>
      </div>
    </div>
  );
}
