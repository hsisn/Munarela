-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mer 18 Avril 2018 à 21:45
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=76 ;

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
(59, '', '', ''),
(60, '', '', ''),
(61, '', '', ''),
(62, '', '', ''),
(63, '', '', ''),
(64, '', '', ''),
(65, '', '', ''),
(66, '', '', ''),
(67, '', '', ''),
(68, '', '', ''),
(69, '', '', ''),
(70, '', '', ''),
(71, '', '', ''),
(72, '', '', ''),
(73, '', '', ''),
(74, '', '', ''),
(75, '', '', '');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=25 ;

--
-- Contenu de la table `circuit`
--

INSERT INTO `circuit` (`idCircuit`, `titre`, `dateDeDepart`, `dateDeRetour`, `nbPersonnesMax`, `nbPersonnesMin`, `description`, `prix`, `imageCircuit`, `guide`, `idPromotion`, `idThematique`, `published`) VALUES
(6, 'un circuit blabla', '2018-04-18 15:14:08.978987', '2018-04-22 04:00:00.000000', 20, 10, '<p>resume du circuit</p>\r\n', 2000, 'ad90a19282ed43d0732163ccfdb441a544018560.jpg', 'null', NULL, 1, 1),
(11, 'aaaa', '2018-04-17 18:06:52.498948', '2018-04-25 04:00:00.000000', 2, 1, '<p>blabla circuit</p>\r\n', 2000, '715cb5d4a49102a6cc54d71cba7a0b76f885a750.jpg', NULL, NULL, 1, 1),
(12, 'aaaa', '2018-04-17 18:06:53.637062', '2018-04-10 04:00:00.000000', 2, 1, '<p>blabla</p>\r\n', 3699, '1f58c32247b5b88247865adf58153209082c6455.jpg', NULL, NULL, 1, 1),
(13, 'phuket ', '2018-04-18 19:16:57.519662', '2018-05-10 08:00:00.000000', 5, 2, '<p>Phuket offre d&eacute;tente, culture et amusement sous les tropiques. Partez en safari &agrave; dos d&rsquo;&eacute;l&eacute;phant ou festoyez jusqu&rsquo;&agrave; l&rsquo;aube &agrave; Patong. D&eacute;couvrez les &icirc;les de la baie de Phang Nga ou explorez la vieille ville de Phuket.</p>\n', 2500, '219993a821653406535dc7f2a6f2ef5f8be9467f.jpg', NULL, NULL, 1, 0),
(14, 'un circuit blabla', '2018-04-17 22:06:37.630461', '2018-04-22 08:00:00.000000', 20, 10, '<p>resume du circuit</p>\r\n', 2000, 'ad90a19282ed43d0732163ccfdb441a544018560.jpg', 'null', NULL, 2, 0),
(15, 'aaaa', '2018-04-17 22:06:52.498948', '2018-04-25 08:00:00.000000', 2, 1, '<p>blabla circuit</p>\r\n', 2000, '715cb5d4a49102a6cc54d71cba7a0b76f885a750.jpg', NULL, NULL, 2, 1),
(16, 'aaaa', '2018-04-17 22:06:53.637062', '2018-04-10 08:00:00.000000', 2, 1, '<p>blabla</p>\r\n', 3699, '1f58c32247b5b88247865adf58153209082c6455.jpg', NULL, NULL, 2, 1),
(17, 'phuket ', '2018-04-24 08:00:00.000000', '2018-05-10 08:00:00.000000', 5, 2, '<p>Phuket offre d&eacute;tente, culture et amusement sous les tropiques. Partez en safari &agrave; dos d&rsquo;&eacute;l&eacute;phant ou festoyez jusqu&rsquo;&agrave; l&rsquo;aube &agrave; Patong. D&eacute;couvrez les &icirc;les de la baie de Phang Nga ou explorez la vieille ville de Phuket.</p>\r\n', 2500, '219993a821653406535dc7f2a6f2ef5f8be9467f.jpg', NULL, NULL, 2, 0),
(18, 'un circuit blabla', '2018-04-17 22:06:37.630461', '2018-04-22 08:00:00.000000', 20, 10, '<p>resume du circuit</p>\r\n', 2000, 'ad90a19282ed43d0732163ccfdb441a544018560.jpg', 'null', NULL, 3, 0),
(19, 'aaaa', '2018-04-17 22:06:52.498948', '2018-04-25 08:00:00.000000', 2, 1, '<p>blabla circuit</p>\r\n', 2000, '715cb5d4a49102a6cc54d71cba7a0b76f885a750.jpg', NULL, NULL, 3, 1),
(20, 'aaaa', '2018-04-17 22:06:53.637062', '2018-04-10 08:00:00.000000', 2, 1, '<p>blabla</p>\r\n', 3699, '1f58c32247b5b88247865adf58153209082c6455.jpg', NULL, NULL, 3, 1),
(21, 'phuket ', '2018-04-18 16:01:06.442262', '2018-05-10 08:00:00.000000', 5, 2, '<p>Phuket offre d&eacute;tente, culture et amusement sous les tropiques. Partez en safari &agrave; dos d&rsquo;&eacute;l&eacute;phant ou festoyez jusqu&rsquo;&agrave; l&rsquo;aube &agrave; Patong. D&eacute;couvrez les &icirc;les de la baie de Phang Nga ou explorez la vieille ville de Phuket.</p>\r\n', 2500, '219993a821653406535dc7f2a6f2ef5f8be9467f.jpg', NULL, NULL, 3, 1),
(22, 'phuket', '2018-04-18 19:16:58.641662', '2018-04-30 04:00:00.000000', 20, 2, '<p>Phuket offre d&eacute;tente, culture et amusement sous les tropiques. Partez en safari &agrave; dos d&rsquo;&eacute;l&eacute;phant ou festoyez jusqu&rsquo;&agrave; l&rsquo;aube &agrave; Patong. D&eacute;couvrez les &icirc;les de la baie de Phang Nga ou explorez la vieille ville de Phuket.</p>\r\n', 3000, 'a86abe1fb14d455c310f279581d36f5357012aa2.jpg', 'null', NULL, 1, 1),
(23, 'Malisie', '2018-04-23 04:00:00.000000', '2018-05-08 04:00:00.000000', 10, 4, '<p>La Malaisie repr&eacute;sente une belle diversit&eacute;. Sa jungle contraste avec le modernisme de ses villes. Sa population est aussi vari&eacute;e que ses paysages : les Chinois, Indiens et autres ont su se m&eacute;langer &agrave; la perfection aux Malais originaires de ces terres d&#39;Asie du Sud-Est. Gr&acirc;ce &agrave; ses diff&eacute;rences, les voyageurs sont de plus en plus nombreux &agrave; se tourner vers cette destination intrigante.</p>\r\n', 2500, '8b41a90ec43f66270f963ac915e4b5a190b319cb.jpg', NULL, NULL, 1, 0),
(24, 'Munarela', '2018-04-18 04:00:00.000000', '2018-04-21 04:00:00.000000', 5, 2, '<p>makayane walou</p>\r\n', 2000, 'b0c0fd5de30f9094a6b7e5dbdb406f5bbd387687.jpg', NULL, NULL, 1, 0);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- Contenu de la table `etape`
--

INSERT INTO `etape` (`idEtape`, `nomEtape`, `descriptionEtape`, `idCircuit`) VALUES
(1, 'premiere etapeun ', '<p>petit descriptif</p>\r\n', 6),
(8, 'Nom de letape 1', '<p>description de letape 1</p>\r\n', 11),
(9, 'Etape Oran', '<p>Tour dans les andalouses</p>\r\n', 12),
(10, 'mostaganem', '<p>on va voir le meridien de greenwich</p>\r\n', 12),
(11, 'Nom de letape 1', '<p>description de letape 1</p>\r\n', 22),
(12, 'Avant de partir', '<p>Un voyage en Malaisie, c&#39;est d&eacute;couvrir un pays aux multiples visages. Constitu&eacute;e d&#39;une partie p&eacute;ninsulaire et du nord de l&#39;&icirc;le de Born&eacute;o, la plupart de ses villes ont &eacute;t&eacute; construites au beau milieu d&#39;une vaste for&ecirc;t tropical. Kuala Lumpur et ses immenses buildings laissent place &agrave; une jungle d&eacute;paysante, inqui&eacute;tante, mais tellement s&eacute;duisante. L&#39;endroit est id&eacute;al pour les amateurs d&#39;activit&eacute;s telles que le trekking ou encore le rafting.</p>\r\n', 23),
(13, 'Bancok', '<p>Ou joignez-vous &agrave; notre excursion optionnelle.&nbsp;<br />\r\nTour de ville &agrave; Bangkok : D&eacute;couvrez la capitale de la Tha&iuml;lande, la fascinante culture tha&iuml;landaise dans cette ville&nbsp;</p>\r\n', 23),
(14, 'Chiang Rai  Wat Rong Khun  Chiang Mai', '<p>Apr&egrave;s le d&eacute;jeuner, transfert &agrave; la province de Chiang Mai en autocar. Arr&ecirc;t au Wat Rong Khun, mieux connu des visiteurs &eacute;trangers sous le nom de Temple blanc (tr&eacute;sor), consid&eacute;r&eacute; comme l&#39;un des plus beaux temples construits&nbsp;</p>\r\n', 23),
(15, 'coucou', '<p>rien a signaler</p>\r\n', 24);

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
('sheraton', 'www.sheraton.com', '', '', 0, 0, 0, '<p>sheraton</p>\r\n', 11),
('hilton', 'www.hilton.com', '', '', 0, 0, 0, '<p>kilom&amp;egrave;tres dans la mer d&amp;rsquo;Andaman, se trouve au sud de la c&amp;ocirc;te tha&amp;iuml;landaise en p&amp;eacute;riph&amp;eacute;rie de l&amp;rsquo;oc&amp;eacute;an Indien. Le centre des activit&amp;eacute;s se trouve sur la c&amp;ocirc;te ouest de l&amp;#39;&amp;icirc;le. On y trouve de belles plages et de nombreux villages, et toute la palette passant des n&amp;eacute;ons et des discoth&amp;egrave;ques de la&amp;nbsp;&lt;strong&gt;plage de Patong&lt;/strong&gt;&amp;nbsp;&amp;agrave; l&amp;rsquo;ambiance tranquille et familiale de la&amp;nbsp;&lt;strong&gt;plage de Kamala</p>\r\n', 11),
('ritz', 'www.ritz.com', '', '', 0, 0, 0, '<p>&amp;Eacute;vadez-vous vers des baies dissimul&amp;eacute;es telles que&amp;nbsp;&lt;strong&gt;Laem Singh&lt;/strong&gt;&amp;nbsp;ou&amp;nbsp;&lt;strong&gt;Kata Noi&lt;/strong&gt;&amp;nbsp;et retrouvez le calme et la tranquillit&amp;eacute;, ou offrez-vous un massage dans un des petits abris que l&amp;rsquo;on trouve sur toutes les plages de l&amp;rsquo;&amp;icirc;le. Trouvez la s&amp;eacute;r&amp;eacute;nit&amp;eacute; au pied du&amp;nbsp;&lt;strong&gt;grand Bouddha&lt;/strong&gt;&amp;nbsp;ou au temple bouddhiste Samnat Song sur la plage de Nai Harn. En fin d&amp;rsquo;apr&amp;egrave;s-midi, rendez-vous au&amp;nbsp;</p>\r\n', 11),
('Sheraton', 'http://www.starwoodhotels.com/sheraton/index.html', '', '', 0, 0, 1, '<p>&nbsp;</p>\r\n\r\n<p>D&eacute;jeuner &agrave; l&#39;h&ocirc;tel, une journ&eacute;e libre pour explorer &agrave; votre rythme.&nbsp;<br />\r\nOu joignez-vous &agrave; notre excursion optionnelle.&nbsp;<br />\r\nTour de ville &agrave; Bangkok : D&eacute;couvrez la capitale de la Tha&iuml;lande, la fascinante culture tha&iuml;landaise dans cette ville dynamique. Commencez par le Grand Palais (tr&eacute;sor), la maison des principales r&eacute;sidences royales, salle du tr&ocirc;ne et un grand nombre d&#39;&eacute;tablissements du gouvernement. Le Grand Palais est l&#39;endroit o&ugrave; chaque visiteur doit faire une visite au moins une fois dans sa vie (les visiteurs sont invit&eacute;s &agrave; s&#39;habiller convenablement). Puis visite du Wat Pho, les maisons du temple &quot;Phra Buddhasaiyat&quot;, une statue g&eacute;ante de Bouddha couch&eacute; qui a un mod&egrave;le tr&egrave;s unique sur ses pieds.<br />\r\nTour optionnel: tour de ville &agrave; Bangkok + d&icirc;ner, CAD99p.p.</p>\r\n', 13),
('Hilton', 'www3.hilton.com/en/index.html', '', '', 0, 1, 0, '<p>&nbsp;</p>\r\n\r\n<p>D&eacute;jeuner &agrave; l&#39;h&ocirc;tel, une journ&eacute;e libre pour explorer &agrave; votre rythme.&nbsp;<br />\r\nOu joignez-vous &agrave; notre excursion optionnelle.&nbsp;<br />\r\nActivit&eacute; optionnelle: Apr&egrave;s le d&eacute;jeuner, transfert au march&eacute; flottant (tr&eacute;sor) Damnoen Saduak. Dans le pass&eacute;, le commerce quotidien en Tha&iuml;lande se faisait surtout le long des rivi&egrave;res et des canaux. Les canaux de Bangkok &eacute;taient autrefois un r&eacute;seau de transport important qui a apport&eacute; &agrave; ce dernier le surnom de &laquo;Venise de l&#39;Est&raquo;. Environ deux heures de Bangkok, ce march&eacute; flottant devient l&#39;une des attractions les plus c&eacute;l&egrave;bres en Tha&iuml;lande. D&icirc;ner dans un restaurant local. Dans l&#39;apr&egrave;s-midi, visite de rive de Sampran, une destination &eacute;co-culturelle qui met l&#39;accent sur le mode de vie biologique. Il croit en un mode de vie &eacute;quilibr&eacute; et durable, embrassant en harmonie les affaires, l&#39;environnement et la communaut&eacute;.<br />\r\nTour optionnel: march&eacute; flottant de Damnoen Saduak + d&icirc;ner, CAD129p.p.</p>\r\n', 13),
('sheraton', 'http://www.starwoodhotels.com/sheraton/index.html', '', '', 0, 1, 0, '<p>&nbsp;</p>\r\n\r\n<p>dans ce si&egrave;cle. Ce chef-d&#39;&oelig;uvre remarquable de l&#39;artiste tha&iuml;landais Chaloemchai Kositpipat, c&eacute;l&egrave;bre par ses peintures extravagantes et uniques li&eacute;es au bouddhisme, refl&egrave;te les grandes visions de l&#39;artiste sur le ciel, l&#39;enfer et l&#39;illumination spirituelle. Dans l&#39;apr&egrave;s-midi, visite de la rue des Artisans de Chiang Mai, route Chiang Mai &ndash; Sankampaeng, o&ugrave; vous trouverez des objets d&#39;artisanat traditionnels tels que la laque noire brillante d&eacute;cor&eacute;e de feuilles d&rsquo;or et la taillerie de pierres pr&eacute;cieuses. Temps libre.</p>\r\n', 14),
('hilton', '', '', '', 0, 1, 0, '<p>&nbsp;</p>\r\n\r\n<p>D&eacute;jeuner &agrave; l&#39;h&ocirc;tel, une journ&eacute;e libre pour explorer &agrave; votre rythme.&nbsp;<br />\r\nOu joignez-vous &agrave; notre excursion optionnelle.&nbsp;<br />\r\nTour de ville: Apr&egrave;s le d&eacute;jeuner, visitez l&#39;Orchid Farm. La Tha&iuml;lande est c&eacute;l&egrave;bre pour ses belles orchid&eacute;es. D&eacute;couvrez le monde &eacute;tonnant des orchid&eacute;es tha&iuml;landaises de diff&eacute;rents types et couleurs. Apr&egrave;s le d&icirc;ner, visite du Wat Phra That Doi Suthep, le temple le plus important et le plus c&eacute;l&egrave;bre de Chiang Mai. Profitez d&#39;une vue panoramique sur la ville, la campagne environnante peut &ecirc;tre vue depuis les jardins du temple au sommet de la montagne. Dans la soir&eacute;e, profitez d&#39;un souper traditionnel Khantoke du Nord avec les sp&eacute;cialit&eacute;s culinaires et les danses classiques du royaume de Lanna.</p>\r\n', 14),
('ma maison', '', '', '', 0, 1, 0, '<p>toujours rien a signaler</p>\r\n', 15);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `panier`
--

INSERT INTO `panier` (`idPanier`, `idCircuit`, `email`) VALUES
(3, 6, 'jas@hotmail.com'),
(4, 12, 'JAS@HOTMAIL.COM'),
(5, 6, 'a@a.com');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=71 ;

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
(53, 'LOLO', 'NONO', 'naar8@hotmail.com', '', '', 58, 54),
(54, 'aaaa', '', '', '', '', 59, 55),
(55, 'LOLO', 'NONO', 'naar8@hotmail.com', '', '', 60, 56),
(56, '12345', '', '', '', '', 61, 57),
(57, '', '', '', '', '', 62, 58),
(58, 'momo', '', '', '', '', 63, 59),
(59, '', '', '', '', '', 64, 60),
(60, '', '', '', '', '', 65, 61),
(61, 'admin', 'admin', 'admin@admin.com', '', '', 66, 62),
(62, 'aaaa', '', '', '', '', 67, 63),
(63, 'admin', 'admin', 'admin@admin.com', '', '', 68, 64),
(64, 'bloblo', '', '', '', '', 69, 65),
(65, 'lala', 'nana', 'jas@hotmail.com', '', '', 70, 66),
(66, '123', '', '', '', '', 71, 67),
(67, 'lala', 'nana', 'jas@hotmail.com', '', '', 72, 68),
(68, 'MMMMMM', '', '', '', '', 73, 69),
(69, 'reay', 'raye', 'a@a.com', '', '', 74, 70),
(70, '1234', '', '', '', '', 75, 71);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=72 ;

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
(55, 0, '0000-00-00', '0000-00-00', '', ''),
(56, 0, '0000-00-00', '0000-00-00', '', ''),
(57, 0, '0000-00-00', '0000-00-00', '', ''),
(58, 0, '0000-00-00', '0000-00-00', '', ''),
(59, 0, '0000-00-00', '0000-00-00', '', ''),
(60, 0, '0000-00-00', '0000-00-00', '', ''),
(61, 0, '0000-00-00', '0000-00-00', '', ''),
(62, 0, '0000-00-00', '0000-00-00', '', ''),
(63, 0, '0000-00-00', '0000-00-00', '', ''),
(64, 0, '0000-00-00', '0000-00-00', '', ''),
(65, 0, '0000-00-00', '0000-00-00', '', ''),
(66, 0, '0000-00-00', '0000-00-00', '', ''),
(67, 0, '0000-00-00', '0000-00-00', '', ''),
(68, 0, '0000-00-00', '0000-00-00', '', ''),
(69, 0, '0000-00-00', '0000-00-00', '', ''),
(70, 0, '0000-00-00', '0000-00-00', '', ''),
(71, 0, '0000-00-00', '0000-00-00', '', '');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `promotion`
--

INSERT INTO `promotion` (`idPromotion`, `nom`, `taux`, `datedebut`, `datefin`) VALUES
(1, 'fin de saison', 0.8, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000'),
(2, 'etudiant', 0.7, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000'),
(3, 'fin de classe', 0.5, '2018-04-03 04:00:00.000000', '2018-04-26 04:00:00.000000');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=31 ;

--
-- Contenu de la table `reservation`
--

INSERT INTO `reservation` (`idReservation`, `montanTotal`, `nbrPlaceDispo`, `nbrAdult`, `nbrEnfMTrois`, `NbrEnfBTroisONZ`, `datePaiment`, `idUtilisateur`, `idCircuit`, `solde`) VALUES
(22, 4000, 2, 1, 0, 0, '2018-04-18 21:10:00.000000', 3, 11, 4000),
(23, 7398, 2, 1, 0, 0, '2018-04-18 21:11:49.000000', 3, 12, 7398),
(24, 0, 2, 1, 0, 0, '2018-04-18 21:15:01.000000', 4, 6, 0),
(25, 0, 2, 1, 0, 0, '2018-04-18 21:16:28.000000', 3, 6, 0),
(26, 7398, 2, 1, 0, 0, '2018-04-18 22:09:58.000000', 4, 12, 7398),
(27, 4000, 2, 1, 0, 0, '2018-04-18 22:11:31.000000', 4, 11, 4000),
(28, 4000, 2, 1, 0, 0, '2018-04-19 00:40:46.000000', 5, 6, 4000),
(29, 7398, 2, 1, 0, 0, '2018-04-19 00:43:57.000000', 5, 12, 7398),
(30, 4000, 2, 1, 0, 0, '2018-04-19 01:14:42.000000', 14, 6, 4000);

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
(54, 22),
(55, 23),
(56, 23),
(57, 24),
(58, 24),
(59, 25),
(60, 25),
(61, 26),
(62, 26),
(63, 27),
(64, 27),
(65, 28),
(66, 28),
(67, 29),
(68, 29),
(69, 30),
(70, 30);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

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
(13, '1', '1', '1', '1', 'c4ca4238a0b923820dcc509a6f75849b', 1),
(14, 'raye', 'reay', 'aaaa', 'a@a.com', '81dc9bdb52d04dc20036dbd8313ed055', 1);

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
