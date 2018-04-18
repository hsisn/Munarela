-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mer 18 Avril 2018 à 16:03
-- Version du serveur :  5.6.15-log
-- Version de PHP :  5.5.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `munarela`
--
CREATE DATABASE IF NOT EXISTS `munarela` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `munarela`;

-- --------------------------------------------------------

--
-- Structure de la table `adresse`
--

CREATE TABLE IF NOT EXISTS `adresse` (
  `idAdresse` int(11) NOT NULL AUTO_INCREMENT,
  `ville` varchar(100) NOT NULL,
  `codePostale` varchar(45) NOT NULL,
  `pays` varchar(100) NOT NULL,
  PRIMARY KEY (`idAdresse`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=60 ;

--
-- Contenu de la table `adresse`
--

INSERT INTO `adresse` (`idAdresse`, `ville`, `codePostale`, `pays`) VALUES
(44, '', '', ''),
(45, '', '', ''),
(46, '', '', ''),
(47, '', '', ''),
(48, '', '', ''),
(49, '', '', ''),
(50, '', '', ''),
(51, '', '', ''),
(52, '', '', ''),
(53, '', '', ''),
(54, '', '', ''),
(55, '', '', ''),
(56, '', '', ''),
(57, '', '', ''),
(58, '', '', ''),
(59, '', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `banner`
--

CREATE TABLE IF NOT EXISTS `banner` (
  `banner_id` int(11) NOT NULL,
  `banner_title` varchar(200) NOT NULL,
  `banner_image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `banner`
--

INSERT INTO `banner` (`banner_id`, `banner_title`, `banner_image`) VALUES
(1, 'mon reve', 'banner-1.jpg'),
(2, 'profite du paradis', 'banner-2.jpg'),
(3, 'explore d''autre horizons', 'banner-3.jpg'),
(4, 'Oublie', 'banner-4.jpg'),
(5, 'Caractere choix', 'banner-5.jpg'),
(0, 'Le choix de l''évasion', 'banner-6.jpg'),
(0, 'Un amour de voyage', 'banner-7.jpg'),
(0, 'J''adore mon escapase', 'banner-8.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `circuit`
--

CREATE TABLE IF NOT EXISTS `circuit` (
  `idCircuit` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(45) NOT NULL,
  `dateDeDepart` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `dateDeRetour` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000',
  `nbPersonnesMax` int(2) NOT NULL,
  `nbPersonnesMin` int(2) NOT NULL,
  `description` longtext NOT NULL,
  `prix` float NOT NULL,
  `imageCircuit` varchar(256) NOT NULL,
  `guide` varchar(256) DEFAULT NULL,
  `idPromotion` int(11) DEFAULT NULL,
  `idThematique` int(11) NOT NULL,
  `published` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idCircuit`),
  KEY `idPromotion` (`idPromotion`),
  KEY `idThematique` (`idThematique`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Contenu de la table `circuit`
--

INSERT INTO `circuit` (`idCircuit`, `titre`, `dateDeDepart`, `dateDeRetour`, `nbPersonnesMax`, `nbPersonnesMin`, `description`, `prix`, `imageCircuit`, `guide`, `idPromotion`, `idThematique`, `published`) VALUES
(6, 'un circuit blabla', '2018-04-17 18:06:37.630461', '2018-04-22 04:00:00.000000', 20, 10, '<p>resume du circuit</p>\r\n', 2000, 'ad90a19282ed43d0732163ccfdb441a544018560.jpg', 'null', NULL, 1, 0),
(11, 'aaaa', '2018-04-17 18:06:52.498948', '2018-04-25 04:00:00.000000', 2, 1, '<p>blabla circuit</p>\r\n', 2000, '715cb5d4a49102a6cc54d71cba7a0b76f885a750.jpg', NULL, NULL, 1, 1),
(12, 'aaaa', '2018-04-17 18:06:53.637062', '2018-04-10 04:00:00.000000', 2, 1, '<p>blabla</p>\r\n', 3699, '1f58c32247b5b88247865adf58153209082c6455.jpg', NULL, NULL, 1, 1),
(13, 'phuket ', '2018-04-24 04:00:00.000000', '2018-05-10 04:00:00.000000', 5, 2, '<p>Phuket offre d&eacute;tente, culture et amusement sous les tropiques. Partez en safari &agrave; dos d&rsquo;&eacute;l&eacute;phant ou festoyez jusqu&rsquo;&agrave; l&rsquo;aube &agrave; Patong. D&eacute;couvrez les &icirc;les de la baie de Phang Nga ou explorez la vieille ville de Phuket.</p>\r\n', 2500, '219993a821653406535dc7f2a6f2ef5f8be9467f.jpg', NULL, NULL, 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `etape`
--

CREATE TABLE IF NOT EXISTS `etape` (
  `idEtape` int(11) NOT NULL AUTO_INCREMENT,
  `nomEtape` varchar(256) NOT NULL,
  `descriptionEtape` longtext NOT NULL,
  `idCircuit` int(11) NOT NULL,
  PRIMARY KEY (`idEtape`),
  KEY `idCircuit` (`idCircuit`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Contenu de la table `etape`
--

INSERT INTO `etape` (`idEtape`, `nomEtape`, `descriptionEtape`, `idCircuit`) VALUES
(1, 'premiere etapeun ', '<p>petit descriptif</p>\r\n', 6),
(8, 'Nom de letape 1', '<p>description de letape 1</p>\r\n', 11),
(9, 'Etape Oran', '<p>Tour dans les andalouses</p>\r\n', 12),
(10, 'mostaganem', '<p>on va voir le meridien de greenwich</p>\r\n', 12),
(11, 'etape 1', '<p>Phuket, la plus grande &icirc;le de Tha&iuml;lande, est un site idyllique avec de longues plages de sable blanc, d&rsquo;agr&eacute;ables eaux turquoise et des for&ecirc;ts encore vierges.</p>\r\n', 13),
(12, 'etape 2', '<p>Il peut arriver qu&rsquo;on ressente l&rsquo;unique envie de s&rsquo;allonger dans un hamac et de se d&eacute;tendre.</p>\r\n', 13);

-- --------------------------------------------------------

--
-- Structure de la table `jour`
--

CREATE TABLE IF NOT EXISTS `jour` (
  `nomhotel` varchar(256) DEFAULT NULL,
  `urlHotel` varchar(100) DEFAULT NULL,
  `nomRestaurant` varchar(100) DEFAULT NULL,
  `urlRestaurant` varchar(100) DEFAULT NULL,
  `dejeuner` tinyint(1) NOT NULL DEFAULT '0',
  `diner` tinyint(1) NOT NULL DEFAULT '0',
  `souper` tinyint(1) NOT NULL DEFAULT '0',
  `descriptionJour` longtext,
  `idEtape` int(11) NOT NULL,
  KEY `idEtape` (`idEtape`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `jour`
--

INSERT INTO `jour` (`nomhotel`, `urlHotel`, `nomRestaurant`, `urlRestaurant`, `dejeuner`, `diner`, `souper`, `descriptionJour`, `idEtape`) VALUES
('alo', 'balo', 'malo', 'talo', 0, 1, 0, '<p>un descriptif</p>\r\n', 1),
('hotel 11', '', '', '', 0, 0, 0, '<p>description du jour 1</p>\r\n', 8),
('hotel 12', '', '', '', 0, 0, 0, '<p>description du jour 2</p>\r\n', 8),
('hotel 12', '', '', '', 0, 0, 0, '<p>description du jour 3</p>\r\n', 8),
('sheraton', '', '', '', 0, 0, 0, '<p>on va visiter les andalouses</p>\r\n', 9),
('une hauberge mostaganemois', '', '', '', 0, 0, 0, '<p>on va a stidia</p>\r\n', 10),
('', '', '', '', 0, 0, 0, '<p>balade en mere fi salamandre</p>\r\n', 10),
('hotel de centre ville', '', '', '', 0, 0, 0, '<p>discoteque way way</p>\r\n', 10),
('sheraton', 'www.sheraton.com', '', '', 0, 1, 0, '<p>Vous y trouverez des h&ocirc;tels de luxe, des restaurants de calibre international, des discoth&egrave;ques bond&eacute;es c&ocirc;toyer des march&eacute;s d&eacute;fra&icirc;chis. Dans cet environnement culturel diversifi&eacute;, vous verrez des moines en robe orang&eacute;e croiser des hommes d&rsquo;affaires bien nantis. L&rsquo;expression tha&iuml;landaise &laquo;&nbsp;mai pen rai&nbsp;&raquo;, signifiant &laquo;&nbsp;pas de souci&nbsp;&raquo;, r&eacute;sume bien la philosophie qui anime presque toutes les facettes de la vie sur l&rsquo;&icirc;le.</p>\r\n', 11),
('hilton', 'www.hilton.com', '', '', 0, 0, 0, '<p>Phuket, une &icirc;le de 48&nbsp;kilom&egrave;tres sur 21&nbsp;kilom&egrave;tres dans la mer d&rsquo;Andaman, se trouve au sud de la c&ocirc;te tha&iuml;landaise en p&eacute;riph&eacute;rie de l&rsquo;oc&eacute;an Indien. Le centre des activit&eacute;s se trouve sur la c&ocirc;te ouest de l&#39;&icirc;le. On y trouve de belles plages et de nombreux villages, et toute la palette passant des n&eacute;ons et des discoth&egrave;ques de la&nbsp;<strong>plage de Patong</strong>&nbsp;&agrave; l&rsquo;ambiance tranquille et familiale de la&nbsp;<strong>plage de Kamala</strong>.</p>\r\n', 11),
('ritz', 'www.ritz.com', '', '', 0, 0, 0, '<p>&Eacute;vadez-vous vers des baies dissimul&eacute;es telles que&nbsp;<strong>Laem Singh</strong>&nbsp;ou&nbsp;<strong>Kata Noi</strong>&nbsp;et retrouvez le calme et la tranquillit&eacute;, ou offrez-vous un massage dans un des petits abris que l&rsquo;on trouve sur toutes les plages de l&rsquo;&icirc;le. Trouvez la s&eacute;r&eacute;nit&eacute; au pied du&nbsp;<strong>grand Bouddha</strong>&nbsp;ou au temple bouddhiste Samnat Song sur la plage de Nai Harn. En fin d&rsquo;apr&egrave;s-midi, rendez-vous au&nbsp;<strong>cap Promthep</strong>&nbsp;et admirez l&rsquo;horizon infini o&ugrave; d&eacute;cline un soleil rougeoyant.</p>\r\n', 12);

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

CREATE TABLE IF NOT EXISTS `paiement` (
  `idPaiement` int(11) NOT NULL AUTO_INCREMENT,
  `datePaiment` timestamp(6) NULL DEFAULT NULL,
  `montanttPaiment` float DEFAULT NULL,
  `idReservation` int(11) NOT NULL,
  PRIMARY KEY (`idPaiement`),
  KEY `idReservation` (`idReservation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE IF NOT EXISTS `panier` (
  `idPanier` int(11) NOT NULL AUTO_INCREMENT,
  `idCircuit` int(11) NOT NULL,
  `email` varchar(60) NOT NULL,
  PRIMARY KEY (`idPanier`),
  KEY `idCircuit` (`idCircuit`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `panier`
--

INSERT INTO `panier` (`idPanier`, `idCircuit`, `email`) VALUES
(3, 11, 'jas@hotmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `participants`
--

CREATE TABLE IF NOT EXISTS `participants` (
  `idparticipants` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `courriel` varchar(256) NOT NULL,
  `sexe` varchar(45) NOT NULL,
  `tel` varchar(100) NOT NULL,
  `idAdresse` int(11) NOT NULL,
  `idPasspor` int(11) NOT NULL,
  PRIMARY KEY (`idparticipants`),
  KEY `idAdresse` (`idAdresse`),
  KEY `idPasspor` (`idPasspor`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=55 ;

--
-- Contenu de la table `participants`
--

INSERT INTO `participants` (`idparticipants`, `nom`, `prenom`, `courriel`, `sexe`, `tel`, `idAdresse`, `idPasspor`) VALUES
(39, 'lala', 'nana', 'jas@hotmail.com', '', '', 44, 40),
(40, '1111', '', '', '', '', 45, 41),
(41, 'lala', 'nana', 'jas@hotmail.com', '', '', 46, 42),
(42, 'assdd', '', '', '', '', 47, 43),
(43, 'lala', 'nana', 'jas@hotmail.com', '', '', 48, 44),
(44, 'ssss', '', '', '', '', 49, 45),
(45, 'lala', 'nana', 'jas@hotmail.com', '', '', 50, 46),
(46, '123456', '', '', '', '', 51, 47),
(47, 'lala', 'nana', 'jas@hotmail.com', '', '', 52, 48),
(48, 'mamamamamam', '', '', '', '', 53, 49),
(49, 'lala', 'nana', 'jas@hotmail.com', '', '', 54, 50),
(50, 'nadjib', '', '', '', '', 55, 51),
(51, 'lala', 'nana', 'jas@hotmail.com', '', '', 56, 52),
(52, 'lahcene', '', '', '', '', 57, 53),
(53, 'lala', 'nana', 'jas@hotmail.com', '', '', 58, 54),
(54, 'p1', '', '', '', '', 59, 55);

-- --------------------------------------------------------

--
-- Structure de la table `passeport`
--

CREATE TABLE IF NOT EXISTS `passeport` (
  `idPasspor` int(11) NOT NULL AUTO_INCREMENT,
  `numeroPass` int(50) NOT NULL,
  `dateDelivPass` date NOT NULL,
  `dateExpiration` date NOT NULL,
  `nationalites` varchar(100) NOT NULL,
  `lieuDeliv` varchar(256) NOT NULL,
  PRIMARY KEY (`idPasspor`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=56 ;

--
-- Contenu de la table `passeport`
--

INSERT INTO `passeport` (`idPasspor`, `numeroPass`, `dateDelivPass`, `dateExpiration`, `nationalites`, `lieuDeliv`) VALUES
(40, 0, '0000-00-00', '0000-00-00', '', ''),
(41, 0, '0000-00-00', '0000-00-00', '', ''),
(42, 0, '0000-00-00', '0000-00-00', '', ''),
(43, 0, '0000-00-00', '0000-00-00', '', ''),
(44, 0, '0000-00-00', '0000-00-00', '', ''),
(45, 0, '0000-00-00', '0000-00-00', '', ''),
(46, 0, '0000-00-00', '0000-00-00', '', ''),
(47, 0, '0000-00-00', '0000-00-00', '', ''),
(48, 0, '0000-00-00', '0000-00-00', '', ''),
(49, 0, '0000-00-00', '0000-00-00', '', ''),
(50, 0, '0000-00-00', '0000-00-00', '', ''),
(51, 0, '0000-00-00', '0000-00-00', '', ''),
(52, 0, '0000-00-00', '0000-00-00', '', ''),
(53, 0, '0000-00-00', '0000-00-00', '', ''),
(54, 0, '0000-00-00', '0000-00-00', '', ''),
(55, 0, '0000-00-00', '0000-00-00', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `promotion`
--

CREATE TABLE IF NOT EXISTS `promotion` (
  `idPromotion` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(256) CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL,
  `taux` float NOT NULL,
  `datedebut` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `datefin` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000',
  PRIMARY KEY (`idPromotion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE IF NOT EXISTS `reservation` (
  `idReservation` int(11) NOT NULL AUTO_INCREMENT,
  `montanTotal` float NOT NULL,
  `nbrPlaceDispo` int(11) NOT NULL,
  `nbrAdult` int(11) NOT NULL,
  `nbrEnfMTrois` int(11) NOT NULL,
  `NbrEnfBTroisONZ` int(11) NOT NULL,
  `datePaiment` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `idUtilisateur` int(11) NOT NULL,
  `idCircuit` int(11) NOT NULL,
  `solde` float NOT NULL,
  PRIMARY KEY (`idReservation`),
  UNIQUE KEY `idReservation` (`idReservation`,`montanTotal`,`idUtilisateur`,`idCircuit`),
  KEY `idCircuit` (`idCircuit`),
  KEY `idUtilisateur` (`idUtilisateur`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=23 ;

--
-- Contenu de la table `reservation`
--

INSERT INTO `reservation` (`idReservation`, `montanTotal`, `nbrPlaceDispo`, `nbrAdult`, `nbrEnfMTrois`, `NbrEnfBTroisONZ`, `datePaiment`, `idUtilisateur`, `idCircuit`, `solde`) VALUES
(22, 4000, 2, 1, 0, 0, '2018-04-18 19:02:05.000000', 5, 11, 4000);

-- --------------------------------------------------------

--
-- Structure de la table `reservationparticipant`
--

CREATE TABLE IF NOT EXISTS `reservationparticipant` (
  `idParticipants` int(11) NOT NULL,
  `idReservation` int(11) NOT NULL,
  PRIMARY KEY (`idParticipants`,`idReservation`),
  KEY `idReservation` (`idReservation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `reservationparticipant`
--

INSERT INTO `reservationparticipant` (`idParticipants`, `idReservation`) VALUES
(53, 22),
(54, 22);

-- --------------------------------------------------------

--
-- Structure de la table `thematique`
--

CREATE TABLE IF NOT EXISTS `thematique` (
  `idThematique` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) NOT NULL,
  `description` longtext NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`idThematique`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `thematique`
--

INSERT INTO `thematique` (`idThematique`, `nom`, `description`, `image`) VALUES
(1, 'Oceanie', 'Tout ce qui est en oceanie', 'a0f1e055bde100cc799d036ede688d6b9ef8ee5f.jpg'),
(2, 'Pacifique', 'zfzz', '03e249731897c59c0c75e0cb0e9cc1fa3ef57403.jpg'),
(3, 'Europe', 'qszf', '3a85dba78f53862dbf6321135088987a61968b8b.jpg'),
(4, 'Afrique', 'qszf', '03434e9348bed1b93193ef2c29e9ed697a2d78cc.jpg'),
(5, 'Antilles', 'qszf', 'e5dfef216dc2aa856d78116320b8a5b959a5b2e1.jpg'),
(6, 'Capitales', 'qszf', '8fec20818bcb9334ebfee5e45dc3657f3185aaae.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE IF NOT EXISTS `utilisateur` (
  `idUtilisateur` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `display_name` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(50) NOT NULL,
  `actif` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idUtilisateur`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Contenu de la table `utilisateur`
--

INSERT INTO `utilisateur` (`idUtilisateur`, `first_name`, `last_name`, `display_name`, `email`, `password`, `actif`) VALUES
(1, 'Jay', 'Pabs', 'jaypabs', 'asdf@gmail.com', '202cb962ac59075b964b07152d234b70', 1),
(2, 'nadjib', 'larkem', 'nadj851', 'nadjiblar@hotmail.fr', '21232f297a57a5a743894a0e4a801fc3', 1),
(3, 'NONO', 'LOLO', 'nadj851', 'naar8@hotmail.com', '202cb962ac59075b964b07152d234b70', 1),
(4, 'admin', 'admin', 'admin', 'admin@admin.com', '21232f297a57a5a743894a0e4a801fc3', 1),
(5, 'nana', 'lala', 'jas', 'jas@hotmail.com', '202cb962ac59075b964b07152d234b70', 1),
(6, 'nadjib', 'larkem', 'nadjib', 'nadjib@hotmail.com', '202cb962ac59075b964b07152d234b70', 1),
(7, 'lara', 'mara', 'lara', 'lara@hotmail.com', '202cb962ac59075b964b07152d234b70', 1),
(8, 'haha', 'lala', 'lala', 'lala@hotmail.com', '202cb962ac59075b964b07152d234b70', 1),
(9, 'ahcen', 'boutaghane', 'haswen', 'eee@d.com', '96e79218965eb72c92a549dd5a330112', 1),
(10, 'nasd', 'dwdw', 'fwfwf', 'n@hotmail.fr33', '698d51a19d8a121ce581499d7b701668', 1),
(11, 'ahcen', 'boutaghane', 'ere', 'nadjiblar@h1otmaill.fr', '698d51a19d8a121ce581499d7b701668', 1),
(12, 'ahcen', 'boutaghane', 'haswen', 'nad111jiblar@hotmaill.fr', '698d51a19d8a121ce581499d7b701668', 1),
(13, '1', '1', '1', '1', 'c4ca4238a0b923820dcc509a6f75849b', 1);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `circuit`
--
ALTER TABLE `circuit`
  ADD CONSTRAINT `circuit_ibfk_1` FOREIGN KEY (`idPromotion`) REFERENCES `promotion` (`idPromotion`) ON DELETE CASCADE,
  ADD CONSTRAINT `circuit_ibfk_2` FOREIGN KEY (`idThematique`) REFERENCES `thematique` (`idThematique`) ON DELETE CASCADE;

--
-- Contraintes pour la table `etape`
--
ALTER TABLE `etape`
  ADD CONSTRAINT `etape_ibfk_1` FOREIGN KEY (`idCircuit`) REFERENCES `circuit` (`idCircuit`) ON DELETE CASCADE;

--
-- Contraintes pour la table `jour`
--
ALTER TABLE `jour`
  ADD CONSTRAINT `jour_ibfk_1` FOREIGN KEY (`idEtape`) REFERENCES `etape` (`idEtape`) ON DELETE CASCADE;

--
-- Contraintes pour la table `paiement`
--
ALTER TABLE `paiement`
  ADD CONSTRAINT `paiement_ibfk_1` FOREIGN KEY (`idReservation`) REFERENCES `reservation` (`idReservation`);

--
-- Contraintes pour la table `panier`
--
ALTER TABLE `panier`
  ADD CONSTRAINT `panier_ibfk_1` FOREIGN KEY (`idCircuit`) REFERENCES `circuit` (`idCircuit`);

--
-- Contraintes pour la table `participants`
--
ALTER TABLE `participants`
  ADD CONSTRAINT `participants_ibfk_1` FOREIGN KEY (`idAdresse`) REFERENCES `adresse` (`idAdresse`) ON DELETE CASCADE,
  ADD CONSTRAINT `participants_ibfk_2` FOREIGN KEY (`idPasspor`) REFERENCES `passeport` (`idPasspor`) ON DELETE CASCADE;

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`idCircuit`) REFERENCES `circuit` (`idCircuit`),
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON UPDATE NO ACTION;

--
-- Contraintes pour la table `reservationparticipant`
--
ALTER TABLE `reservationparticipant`
  ADD CONSTRAINT `reservationparticipant_ibfk_1` FOREIGN KEY (`idParticipants`) REFERENCES `participants` (`idparticipants`),
  ADD CONSTRAINT `reservationparticipant_ibfk_2` FOREIGN KEY (`idReservation`) REFERENCES `reservation` (`idReservation`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
