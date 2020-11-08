-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 06 nov. 2020 à 11:32
-- Version du serveur :  10.5.5-MariaDB
-- Version de PHP : 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `GSP`
--

-- --------------------------------------------------------

--
-- Structure de la table `Etudiant`
--

CREATE TABLE `Etudiant` (
  `etudiant_id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `classe` varchar(10) NOT NULL,
  `personne_id` int(10)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `Matiere`
--

CREATE TABLE `Matiere` (
  `matiere_id` int(10) NOT NULL,
  `matiere_nom` varchar(80) NOT NULL,
  `prof_id` int(10) NOT NULL,
  `classe` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `Personne`
--

CREATE TABLE `Personne` (
  `personne_id` int(10) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `photo` longblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `Personnel`
--

CREATE TABLE `Personnel` (
  `personnel_id` int(10) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `personne_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `Presence`
--

CREATE TABLE `Presence` (
  `presence_id` int(10) NOT NULL,
  `status` varchar(20) NOT NULL,
  `date` date NOT NULL,
  `heure` time DEFAULT NULL,
  `personne_id` int(10) NOT NULL,
  `motifs` text NOT NULL DEFAULT 'inconnu'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `Professeur`
--

CREATE TABLE `Professeur` (
  `prof_id` int(10) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `personne_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Etudiant`
--
ALTER TABLE `Etudiant`
  ADD PRIMARY KEY (`etudiant_id`),
  ADD KEY `classe` (`classe`),
  ADD KEY `FK_personne_id` (`personne_id`);

--
-- Index pour la table `Matiere`
--
ALTER TABLE `Matiere`
  ADD PRIMARY KEY (`matiere_id`),
  ADD KEY `FK_prof_matiere` (`prof_id`),
  ADD KEY `FK_classe_matiere` (`classe`);

--
-- Index pour la table `Personne`
--
ALTER TABLE `Personne`
  ADD PRIMARY KEY (`personne_id`);

--
-- Index pour la table `Personnel`
--
ALTER TABLE `Personnel`
  ADD PRIMARY KEY (`personnel_id`),
  ADD KEY `FK_personne_personnel` (`personne_id`);

--
-- Index pour la table `Presence`
--
ALTER TABLE `Presence`
  ADD PRIMARY KEY (`presence_id`),
  ADD KEY `FK_presence_etudiant` (`personne_id`);

--
-- Index pour la table `Professeur`
--
ALTER TABLE `Professeur`
  ADD PRIMARY KEY (`prof_id`),
  ADD KEY `FK_personne_prof` (`personne_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Etudiant`
--
ALTER TABLE `Etudiant`
  MODIFY `etudiant_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Matiere`
--
ALTER TABLE `Matiere`
  MODIFY `matiere_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Personne`
--
ALTER TABLE `Personne`
  MODIFY `personne_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Personnel`
--
ALTER TABLE `Personnel`
  MODIFY `personnel_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Presence`
--
ALTER TABLE `Presence`
  MODIFY `presence_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Professeur`
--
ALTER TABLE `Professeur`
  MODIFY `prof_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Etudiant`
--
ALTER TABLE `Etudiant`
  ADD CONSTRAINT `FK_personne_id` FOREIGN KEY (`personne_id`) REFERENCES `Personne` (`personne_id`);

--
-- Contraintes pour la table `Matiere`
--
ALTER TABLE `Matiere`
  ADD CONSTRAINT `FK_classe_matiere` FOREIGN KEY (`classe`) REFERENCES `Etudiant` (`classe`),
  ADD CONSTRAINT `FK_prof_matiere` FOREIGN KEY (`prof_id`) REFERENCES `Professeur` (`prof_id`);

--
-- Contraintes pour la table `Personnel`
--
ALTER TABLE `Personnel`
  ADD CONSTRAINT `FK_personne_personnel` FOREIGN KEY (`personne_id`) REFERENCES `Personne` (`personne_id`);

--
-- Contraintes pour la table `Presence`
--
ALTER TABLE `Presence`
  ADD CONSTRAINT `FK_presence_etudiant` FOREIGN KEY (`personne_id`) REFERENCES `Personne` (`personne_id`);

--
-- Contraintes pour la table `Professeur`
--
ALTER TABLE `Professeur`
  ADD CONSTRAINT `FK_personne_prof` FOREIGN KEY (`personne_id`) REFERENCES `Personne` (`personne_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
