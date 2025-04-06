export default function ConditionsUtilisation() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-teal-700 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Conditions Générales d'Utilisation
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
            <h2>1. Définition de la plateforme</h2>
            <p>
              TechTalent est une plateforme en ligne qui met en relation des freelances et des clients pour la
              réalisation de projets. La plateforme facilite la recherche, la mise en relation, la collaboration et le
              paiement entre les parties.
            </p>

            <h2>2. Conditions d'inscription</h2>
            <p>
              Pour utiliser TechTalent, vous devez créer un compte en fournissant des informations exactes, complètes et
              à jour. Vous êtes responsable de la confidentialité de votre mot de passe et de toutes les activités qui
              se Vous êtes responsable de la confidentialité de votre mot de passe et de toutes les activités qui se
              produisent sur votre compte.
            </p>

            <h2>3. Règles d'utilisation</h2>
            <p>En utilisant TechTalent, vous vous engagez à respecter les règles suivantes :</p>
            <ul>
              <li>Ne pas créer de faux profils ou fournir des informations mensongères</li>
              <li>Ne pas utiliser la plateforme à des fins illégales ou frauduleuses</li>
              <li>Ne pas harceler, intimider ou discriminer d'autres utilisateurs</li>
              <li>Ne pas contourner le système de paiement de la plateforme</li>
              <li>Respecter les droits de propriété intellectuelle des autres utilisateurs</li>
            </ul>

            <h2>4. Contenu utilisateur</h2>
            <p>
              Les freelances et les clients sont entièrement responsables du contenu qu'ils publient sur la plateforme,
              y compris les descriptions de projets, les propositions, les portfolios et les communications. TechTalent
              se réserve le droit de supprimer tout contenu inapproprié ou contraire aux présentes conditions.
            </p>

            <h2>5. Paiements et commissions</h2>
            <p>
              TechTalent facilite les paiements entre clients et freelances via un système sécurisé. Une commission est
              prélevée sur chaque transaction, conformément à nos tarifs en vigueur. Les fonds sont déposés sur un
              compte séquestre et ne sont libérés au freelance qu'après validation du travail par le client.
            </p>

            <h2>6. Responsabilités</h2>
            <p>
              TechTalent agit uniquement en tant qu'intermédiaire et n'est pas responsable de la qualité du travail
              fourni par les freelances, ni des retards ou défauts de paiement des clients. Les contrats sont conclus
              directement entre les freelances et les clients.
            </p>

            <h2>7. Données personnelles</h2>
            <p>
              TechTalent collecte et traite vos données personnelles conformément à sa Politique de Confidentialité. En
              utilisant la plateforme, vous consentez à cette collecte et à ce traitement. Pour plus d'informations,
              veuillez consulter notre{" "}
              <a href="/politique-confidentialite" className="text-teal-600 hover:text-teal-700">
                Politique de Confidentialité
              </a>
              .
            </p>

            <h2>8. Suspension et résiliation</h2>
            <p>
              TechTalent se réserve le droit de suspendre ou de résilier votre compte en cas de violation des présentes
              conditions. Vous pouvez également supprimer votre compte à tout moment, sous réserve de l'achèvement de
              vos projets en cours et du règlement de vos obligations financières.
            </p>

            <h2>9. Modifications des conditions</h2>
            <p>
              TechTalent peut modifier les présentes conditions à tout moment. Les modifications importantes seront
              notifiées aux utilisateurs. L'utilisation continue de la plateforme après ces modifications constitue
              votre acceptation des nouvelles conditions.
            </p>

            <h2>10. Contact légal</h2>
            <p>
              Pour toute question juridique concernant ces conditions, veuillez nous contacter à l'adresse suivante :
              legal@techtalent.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

