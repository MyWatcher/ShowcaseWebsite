import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
    return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Timeline"
                paragraph="Découvrez le parcours de l'application OWL depuis sa création."
                mb="44px"
              />
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ms-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time
                            className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Septembre
                            2022
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Moonshot</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">  {"La moonshot d'Epitech consiste en deux semaines d'idéalisation en équipe sur différents sujets d'innovation."}
                            {"Cet exercice a permis d'imaginer les bases de l'application OWL."}
                        </p>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </li>
                    <li className="mb-10 ms-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Octobre
                            2022 - Novembre 2022
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Definition du projet</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400"> {"À l'aide d'un spécialiste en création d'entreprises et de projet, nous avons pu définir plus précisément ce qu'étaient les attentes et les besoins de l'application OWL."}</p>
                    </li>
                    <li className="ms-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time
                            className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Décembre
                            2022
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sprint - Forward</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400"> {"Durant la forward, nous avons pu créer un Proof of Concept pour l'application mobile."}
                            {"L'équipe a également commencé à créer l'image marketing de l'application."}
                            {"La charte graphique ainsi que le logo a été réalisé."}</p>
                    </li>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"/>

                    <li className="mb-10 ms-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Avril
                            2023 - Juin 2023
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Test & Learn</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">  {"Pendant ce premier sprint, OWL a conçu les maquettes du projet et exploré diverses méthodes d'organisation et modes de communication. De plus, nous avons mis en place des outils d'intégration continue pour renforcer notre processus de développement."}
                        </p>
                    </li>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    <li className="mb-10 ms-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Juillet
                            2023 - Octobre 2023
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Management & Processes</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{"Au cours de ce sprint, nous avons pu accélérer le développement de l'application mobile, tant en termes de fonctionnalités que de design. En conséquence, nous avons réalisé des progrès significatifs sur les aspects fonctionnels et esthétiques de notre application."}</p>
                    </li>

                    <li className="mb-10 ms-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time
                            className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Novembre
                            2023 - Janvier 2024
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fast Forward</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{"Durant cette période, en plus de continuer le développement de l'application, nous avons défini les particularités de notre gestion de projet, ainsi que notre gestion des désaccords et des conflits internes au groupe."}</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time
                            className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Janvier
                            2023 - Mai 2024
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Beta & Growth Hacking</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{"Pendant ce sprint, nous avons lancé la version bêta de notre application mobile et démarré notre stratégie de growth hacking. Les fonctionnalités clés ont été implémentées et testées, permettant aux premiers utilisateurs de découvrir l'application et de fournir des retours précieux. Notre objectif était de maximiser l'engagement des utilisateurs et d'itérer rapidement, posant ainsi les bases d'une croissance évolutive."}</p>
                    </li>
                </ol>
            </div>
              <div className="w-full px-4 lg:w-1/2">
                  <div
                      className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                      data-wow-delay=".2s"
                  >
                      <Image
                          src="/images/about/about-image.svg"
                          alt="about-image"
                          fill
                          className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                      />
                      <Image
                          src="/images/about/about-image-dark.svg"
                          alt="about-image"
                          fill
                          className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
                      />
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
