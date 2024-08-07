import React from 'react';
import s from './style.module.scss'

const LegalNotice = () => {
    return (
    <div className={s.container}>
        <p className={s.mainTitle}>Mentions Légales :</p>
        <div className={s.subContainer}>
            <p className={s.subTitle}>1. Identification de l'Éditeur du Site</p>
            <div className={s.contentContainer}>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Nom de l'Éditeur :</p>
                    <p className={s.content}>GICQUEL Pierre-Marie</p>
                </div>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Adresse :</p>
                    <p className={s.content}>
                        1 ter rue des chênes <br />
                        35330 Maure de Bretagne <br />
                        Val d'Anast
                    </p>
                </div>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Téléphone :</p>
                    <p className={s.content}>+33 6 85 55 39 02</p>
                </div>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Adresse e-mail :</p>
                    <p className={s.content}>pierremarie.gicquel@gmail.com</p>
                </div>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Statut :</p>
                    <p className={s.content}>
                        Auto-entrepreneur <br />
                        SIRET : 123 456 789 00012
                    </p>
                </div>
            </div>
        </div>
        <div className={s.subContainer}>
            <p className={s.subTitle}>2. Hébergement du site</p>
            <div className={s.contentContainer}>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Nom de l'Hébergeur : </p>
                    <p className={s.content}>OVH</p>
                </div>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Adresse :</p>
                    <p className={s.content}>
                        2 Rue Kellermann <br />
                        59100 Roubaix, France
                    </p>
                </div>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Téléphone de l'Hébergeur :</p>
                    <p className={s.content}>+33 9 72 10 10 07</p>
                </div>
            </div>
        </div>
        <div className={s.subContainer}>
            <p className={s.subTitle}>3. Propriété intellectuelle</p>
            <div className={s.contentContainer}>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Tous les contenus présents sur ce site (textes, images, vidéos, graphismes) sont la propriété exclusive de GICQUEL Pierre-Marie et sont protégés par le droit d'auteur. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de GICQUEL Pierre-Marie. Pour toute demande d'autorisation ou d'information, veuillez nous contacter par e-mail : pierremarie.gicquel@gmail.com.</p>
                </div>
            </div>
        </div>
        <div className={s.subContainer}>
            <p className={s.subTitle}>4. Conditions Générales d'Utilisation (CGU)</p>
            <div className={s.contentContainer}>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>L'utilisation de ce site implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation peuvent être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.</p>
                </div>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Accès au site :</p>
                    <p className={s.content}>Le site est accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par GICQUEL Pierre-Marie, qui s'efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l'intervention.</p>
                </div>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Responsabilité :</p>
                    <p className={s.content}>GICQUEL Pierre-Marie s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
                </div>
            </div>
        </div>
        <div className={s.subContainer}>
            <p className={s.subTitle}>5. Politique de Confidentialité et de Protection des Données Personnelles</p>
            <div className={s.contentContainer}>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>GICQUEL Pierre-Marie accorde une grande importance à la confidentialité et à la protection de vos données personnelles.</p>
                </div>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Utilisation des données :</p>
                    <p className={s.content}>Lors de la navigation sur le site, des données peuvent être collectées automatiquement (cookies, adresse IP, type de navigateur, etc.). Ces données sont utilisées à des fins statistiques et pour améliorer l'expérience utilisateur.</p>
                </div>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Responsabilité :</p>
                    <p className={s.content}>Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé par GICQUEL Pierre-Marie pour la gestion de sa clientèle et la communication d'informations relatives aux services proposés. Elles sont conservées pendant une durée conforme à la législation en vigueur.</p>
                </div>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Droits des utilisateurs :</p>
                    <p className={s.content}>Conformément à la loi "Informatique et Libertés", vous pouvez exercer votre droit d'accès aux données vous concernant, les faire rectifier, demander leur suppression ou exercer votre droit à la limitation du traitement de vos données en nous contactant à l'adresse suivante : pierremarie.gicquel@gmail.com.</p>
                </div>
            </div>
        </div>
        <div className={s.subContainer}>
            <p className={s.subTitle}>6. Utilisation des Cookies</p>
            <div className={s.contentContainer}>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Le site peut collecter automatiquement des informations standards telles que votre adresse IP, le type de navigateur, les temps d'accès. Toutes les informations recueillies indirectement ne seront utilisées que pour suivre le volume, le type et la configuration du trafic utilisant ce site, pour en développer la conception et l'agencement et à d'autres fins administratives et de planification, et plus généralement pour améliorer le service que nous vous offrons.</p>
                </div>
            </div>
        </div>
        <div className={s.subContainer}>
            <p className={s.subTitle}>7. Droit Applicable et Juridiction Compétente</p>
            <div className={s.contentContainer}>
                <div className={s.contentSubContainer}>
                    <p className={s.content}>Les présentes mentions légales sont régies par la loi française. En cas de litige, et à défaut d'accord amiable, celui-ci sera porté devant les tribunaux compétents de Paris.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default LegalNotice;