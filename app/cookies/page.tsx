"use client"

import { Button } from "@/components/ui/button"

export default function Cookies() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-teal-700 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Politique de Cookies
              </h1>
              <p className="max-w-[700px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dernière mise à jour : 1 avril 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-li:text-gray-600">
            <h2>Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez
              un site web. Les cookies sont largement utilisés pour faire fonctionner les sites web ou les rendre plus
              efficaces, ainsi que pour fournir des informations aux propriétaires du site.
            </p>

            <h2>Comment utilisons-nous les cookies ?</h2>
            <p>TechTalent utilise des cookies pour diverses raisons, notamment pour :</p>
            <ul>
              <li>Assurer le bon fonctionnement de notre plateforme</li>
              <li>Mémoriser vos préférences et paramètres</li>
              <li>Améliorer la sécurité de votre navigation</li>
              <li>Mesurer l'efficacité de notre site et de nos campagnes marketing</li>
              <li>Analyser comment notre site est utilisé afin de l'améliorer</li>
              <li>Personnaliser votre expérience en vous proposant du contenu pertinent</li>
            </ul>

            <h2>Types de cookies que nous utilisons</h2>

            <h3>Cookies essentiels</h3>
            <p>
              Ces cookies sont nécessaires au fonctionnement de notre site. Ils vous permettent de naviguer sur notre
              plateforme et d'utiliser ses fonctionnalités, comme l'accès aux zones sécurisées. Sans ces cookies,
              certains services que vous avez demandés ne peuvent pas être fournis.
            </p>

            <h3>Cookies de performance</h3>
            <p>
              Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d'améliorer
              les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins
              populaires et à voir comment les visiteurs se déplacent sur le site.
            </p>

            <h3>Cookies de fonctionnalité</h3>
            <p>
              Ces cookies permettent au site de se souvenir des choix que vous faites (comme votre nom d'utilisateur,
              votre langue ou la région dans laquelle vous vous trouvez) et de fournir des fonctionnalités améliorées et
              plus personnalisées.
            </p>

            <h3>Cookies de ciblage</h3>
            <p>
              Ces cookies peuvent être mis en place par nos partenaires publicitaires. Ils peuvent être utilisés par ces
              entreprises pour établir un profil de vos intérêts et vous proposer des publicités pertinentes sur
              d'autres sites.
            </p>

            <h2>Comment gérer vos préférences en matière de cookies</h2>
            <p>
              Vous pouvez à tout moment modifier vos préférences en matière de cookies en cliquant sur le bouton
              ci-dessous :
            </p>

            <div className="flex justify-center my-8">
              <Button
                className="bg-teal-600 hover:bg-teal-700"
                onClick={() => {
                  // This would typically open your cookie consent manager
                  window.dispatchEvent(new CustomEvent("open-cookie-settings"))
                }}
              >
                Gérer mes préférences de cookies
              </Button>
            </div>

            <p>
              Vous pouvez également gérer les cookies via les paramètres de votre navigateur. Veuillez noter que la
              désactivation de certains cookies peut affecter la fonctionnalité de notre site.
            </p>

            <h3>Comment désactiver les cookies dans votre navigateur</h3>
            <ul>
              <li>
                <strong>Chrome</strong> : Menu &gt; Paramètres &gt; Afficher les paramètres avancés &gt; Confidentialité
                &gt; Paramètres de contenu &gt; Cookies
              </li>
              <li>
                <strong>Firefox</strong> : Menu &gt; Options &gt; Vie privée et sécurité &gt; Cookies et données de
                sites
              </li>
              <li>
                <strong>Safari</strong> : Préférences &gt; Confidentialité &gt; Cookies et données de sites web
              </li>
              <li>
                <strong>Edge</strong> : Menu &gt; Paramètres &gt; Cookies et autorisations de site
              </li>
            </ul>

            <h2>Cookies tiers</h2>
            <p>Notre site peut également utiliser des cookies tiers, notamment pour les fonctionnalités suivantes :</p>
            <ul>
              <li>Analyse et statistiques (Google Analytics)</li>
              <li>Partage sur les réseaux sociaux</li>
              <li>Vidéos intégrées (YouTube, Vimeo)</li>
              <li>Cartes interactives (Google Maps)</li>
            </ul>
            <p>
              Ces tiers peuvent avoir accès à vos données personnelles dans le cadre de la fourniture de ces services.
              Nous vous encourageons à consulter leurs politiques de confidentialité respectives.
            </p>

            <h2>Durée de conservation des cookies</h2>
            <p>
              Les cookies de session sont temporaires et sont supprimés de votre appareil lorsque vous fermez votre
              navigateur. Les cookies persistants restent sur votre appareil jusqu'à leur expiration ou jusqu'à ce que
              vous les supprimiez manuellement.
            </p>

            <h2>Modifications de notre politique de cookies</h2>
            <p>
              Nous pouvons mettre à jour cette politique de cookies de temps à autre. Nous vous encourageons à consulter
              régulièrement cette page pour prendre connaissance des éventuelles modifications.
            </p>

            <h2>Contact</h2>
            <p>
              Si vous avez des questions concernant notre utilisation des cookies, veuillez nous contacter à l'adresse
              suivante : privacy@techtalent.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

