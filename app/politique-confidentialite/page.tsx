export default function PolitiqueConfidentialite() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-teal-700 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Politique de Confidentialité
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
            <h2>1. Responsable du traitement</h2>
            <p>
              TechTalent SAS, dont le siège social est situé au 123 Avenue des Champs-Élysées, 75008 Paris, France, est
              responsable du traitement des données personnelles collectées sur la plateforme TechTalent.
            </p>

            <h2>2. Données collectées</h2>
            <p>Nous collectons les données personnelles suivantes :</p>
            <ul>
              <li>
                <strong>Données d'identification</strong> : nom, prénom, adresse email, mot de passe, photo de profil
              </li>
              <li>
                <strong>Données professionnelles</strong> : CV, compétences, expériences, portfolio, tarifs
              </li>
              <li>
                <strong>Données de paiement</strong> : coordonnées bancaires (via nos prestataires de paiement
                sécurisés)
              </li>
              <li>
                <strong>Données de communication</strong> : messages échangés sur la plateforme
              </li>
              <li>
                <strong>Données techniques</strong> : adresse IP, cookies, données de navigation
              </li>
            </ul>

            <h2>3. Finalités du traitement</h2>
            <p>Nous traitons vos données personnelles pour les finalités suivantes :</p>
            <ul>
              <li>Création et gestion de votre compte utilisateur</li>
              <li>Mise en relation entre freelances et clients</li>
              <li>Traitement des paiements et facturation</li>
              <li>Amélioration de nos services et de l'expérience utilisateur</li>
              <li>Communication avec vous (notifications, newsletters, support)</li>
              <li>Prévention des fraudes et sécurisation de la plateforme</li>
              <li>Respect de nos obligations légales et réglementaires</li>
            </ul>

            <h2>4. Base légale du traitement</h2>
            <p>Le traitement de vos données personnelles est fondé sur :</p>
            <ul>
              <li>L'exécution du contrat qui nous lie (conditions d'utilisation)</li>
              <li>Votre consentement (pour certaines communications marketing)</li>
              <li>Notre intérêt légitime (amélioration de nos services, sécurité)</li>
              <li>Le respect de nos obligations légales</li>
            </ul>

            <h2>5. Destinataires des données</h2>
            <p>Vos données personnelles peuvent être partagées avec :</p>
            <ul>
              <li>Les autres utilisateurs de la plateforme (dans le cadre de la mise en relation)</li>
              <li>Nos sous-traitants techniques (hébergement, maintenance, paiement)</li>
              <li>Les autorités administratives ou judiciaires lorsque la loi l'exige</li>
            </ul>
            <p>Nous ne vendons jamais vos données personnelles à des tiers à des fins commerciales.</p>

            <h2>6. Durée de conservation</h2>
            <p>
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour les finalités pour lesquelles
              elles ont été collectées, notamment :
            </p>
            <ul>
              <li>Pendant toute la durée de votre relation avec TechTalent</li>
              <li>Pendant les délais légaux de prescription applicables</li>
              <li>Jusqu'à ce que vous demandiez leur suppression (pour les données basées sur le consentement)</li>
            </ul>

            <h2>7. Vos droits</h2>
            <p>Conformément à la réglementation applicable, vous disposez des droits suivants :</p>
            <ul>
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit de définir des directives relatives au sort de vos données après votre décès</li>
            </ul>
            <p>Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : privacy@techtalent.com</p>

            <h2>8. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
              personnelles contre la destruction, la perte, l'altération ou l'accès non autorisé, notamment :
            </p>
            <ul>
              <li>Chiffrement des données sensibles</li>
              <li>Accès limité aux données sur la base du besoin d'en connaître</li>
              <li>Surveillance et tests réguliers de nos systèmes</li>
              <li>Formation de notre personnel aux bonnes pratiques de sécurité</li>
            </ul>

            <h2>9. Transferts internationaux</h2>
            <p>
              Vos données personnelles sont principalement stockées et traitées dans l'Union Européenne. Si nous devons
              transférer vos données en dehors de l'UE, nous nous assurons que des garanties appropriées sont mises en
              place conformément à la réglementation applicable.
            </p>

            <h2>10. Cookies et technologies similaires</h2>
            <p>
              Nous utilisons des cookies et technologies similaires pour améliorer votre expérience sur notre
              plateforme. Pour plus d'informations, veuillez consulter notre{" "}
              <a href="/cookies" className="text-teal-600 hover:text-teal-700">
                Politique relative aux cookies
              </a>
              .
            </p>

            <h2>11. Modifications de la politique</h2>
            <p>
              Nous pouvons modifier cette politique de confidentialité à tout moment. Les modifications importantes
              seront notifiées aux utilisateurs. L'utilisation continue de la plateforme après ces modifications
              constitue votre acceptation de la nouvelle politique.
            </p>

            <h2>12. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à l'adresse
              suivante : privacy@techtalent.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

