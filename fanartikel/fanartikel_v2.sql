-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 30. Nov 2018 um 11:58
-- Server-Version: 10.1.36-MariaDB
-- PHP-Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `fanartikel`
--
CREATE DATABASE IF NOT EXISTS `fanartikel` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `fanartikel`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `artikel`
--

CREATE TABLE `artikel` (
  `Bezeichnung` varchar(255) DEFAULT NULL,
  `ArtID` int(11) NOT NULL,
  `BildShownFirst` varchar(255) DEFAULT NULL,
  `BildShownSecond` varchar(255) DEFAULT NULL,
  `Preis` decimal(15,2) DEFAULT NULL,
  `WaehrungsID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `artikel`
--

INSERT INTO `artikel` (`Bezeichnung`, `ArtID`, `BildShownFirst`, `BildShownSecond`, `Preis`, `WaehrungsID`) VALUES
('Tardis Keksdose', 1, 'Keksdose zu.jpg', 'Keksdose offen.jpg', '29.99', 1),
('Anti-Posession Stiefel', 2, 'Spn_Schuhe_Posession1.jpg', 'Spn_Schuhe_Posession2.jpg', '39.99', 1),
('Doctor Who Thermo-Becher', 3, 'Doctor_Who_Coffe_Thermo1.jpg', 'Doctor_Who_Coffe_Thermo2.jpg', '7.00', 1),
('Tardis Handtasche', 4, 'Tardis-Tasche1.jpg', 'Tardis-Tasche2.jpg', '59.99', 1),
('Sonic Screwdriver 10.Doctor', 5, '10-Sonic1.jpg', '10-Sonic2.jpg', '36.99', 1),
('Elderstab', 6, 'Elderstab1.jpg', 'Elderstab2.jpg', '13.00', 1),
('Karte des Rumtreibers Thermoeffekt Tasse', 7, 'Karte-des-Rumtreibers-Tasse1.jpg', 'Karte-des-Rumtreibers-Tasse2.jpg', '9.85', 1),
('Slytherin Notizbuch', 8, 'Slytherin-Notizbuch1.jpg', 'Slytherin-Notizbuch2.jpg', '34.90', 1),
('Slytherin Lesezeichen', 9, 'Slytherin-Lesezeichen1.jpg', 'Slytherin-Lesezeichen2.jpg', '14.90', 1),
('Flauschedecke Mittelerde', 10, 'Flauschedecke_Mittelerde1.jpg', 'Flauschedecke_Mittelerde2.jpg', '24.90', 1),
('Die Eine Uhr', 11, 'Die-eine-Uhr1.jpg', 'Die-eine-Uhr2.jpg', '39.90', 1),
('Die Eine Bettwäsche', 12, 'LotR-Bettwaesche1.jpg', 'LotR-Bettwaesche2.jpg', '34.90', 1),
('Tardis Wecker mit Projektion', 13, 'Tardis-Wecker1.jpg', 'Tardis-Wecker2.jpg', '39.90', 1),
('Tardis Shirt', 14, 'Tardis-Shirt1.jpg', 'Tardis-Shirt2.jpg', '15.00', 1),
('Slytherin Shirt', 15, 'Slytherin-Shirt1.jpg', 'Slytherin-Shirt2.jpg', '15.00', 1),
('Slytherin Schlafanzug', 16, 'Slytherin-Schlafanzug1.jpg', 'Slytherin-Schlafanzug2.jpg', '34.90', 1),
('Tardis - Phone Case', 17, 'PhoneCase1.jpg', NULL, '2.99', 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `artikelfandoms`
--

CREATE TABLE `artikelfandoms` (
  `ArtFandomID` int(11) NOT NULL,
  `ArtID` int(11) DEFAULT NULL,
  `FandomID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `artikelfarben`
--

CREATE TABLE `artikelfarben` (
  `FarbID` int(11) DEFAULT NULL,
  `ArtID` int(11) DEFAULT NULL,
  `ArtFarbID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `artikelkategorien`
--

CREATE TABLE `artikelkategorien` (
  `KatID` int(11) DEFAULT NULL,
  `ArtID` int(11) DEFAULT NULL,
  `ArtKatID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `artikelkategorien`
--

INSERT INTO `artikelkategorien` (`KatID`, `ArtID`, `ArtKatID`) VALUES
(3, 1, 1),
(4, 2, 2),
(5, 3, 3),
(7, 4, 4),
(3, 5, 5),
(6, 6, 6),
(5, 7, 7),
(5, 8, 8),
(5, 9, 9),
(5, 10, 10),
(5, 11, 11),
(5, 12, 12),
(3, 13, 13),
(1, 14, 14),
(1, 15, 15),
(1, 16, 16),
(5, 17, 17);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `benutzer`
--

CREATE TABLE `benutzer` (
  `Vorname` varchar(255) DEFAULT NULL,
  `Nachname` varchar(255) DEFAULT NULL,
  `Adresse` varchar(255) DEFAULT NULL,
  `Postleitzahl` int(11) DEFAULT NULL,
  `Ort` varchar(255) DEFAULT NULL,
  `Benutzername` varchar(255) DEFAULT NULL,
  `Passwort` tinytext,
  `BenID` int(11) NOT NULL,
  `StatusID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `benutzer`
--

INSERT INTO `benutzer` (`Vorname`, `Nachname`, `Adresse`, `Postleitzahl`, `Ort`, `Benutzername`, `Passwort`, `BenID`, `StatusID`) VALUES
('Bianca', 'Rizzoli', 'Hans-Schaudig-Str.36', 87600, 'Kaufbeuren', 'brizzoli', '$2a$10$sQR8713CdfFXA5gf4K/H9OWccfl1fO9bR9BPu2ikjMXZx52LF66M2', 1, 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `benutzerwunschliste`
--

CREATE TABLE `benutzerwunschliste` (
  `BenID` int(11) DEFAULT NULL,
  `ArtID` int(11) DEFAULT NULL,
  `WunschID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `fandoms`
--

CREATE TABLE `fandoms` (
  `FandomID` int(11) NOT NULL,
  `Fandom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `fandoms`
--

INSERT INTO `fandoms` (`FandomID`, `Fandom`) VALUES
(1, 'Doctor Who'),
(2, 'Harry Potter'),
(3, 'Fantastic Beasts'),
(4, 'Herr der Ringe'),
(5, 'Sherlock'),
(6, 'Supernatural');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `farben`
--

CREATE TABLE `farben` (
  `Farbe` varchar(255) DEFAULT NULL,
  `FarbID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `farben`
--

INSERT INTO `farben` (`Farbe`, `FarbID`) VALUES
('Schwarz', 1),
('Weiß', 2),
('Blau', 3),
('Grün', 4),
('Braun', 5),
('Rot', 6),
('Gelb', 7);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `kategorien`
--

CREATE TABLE `kategorien` (
  `Kategorie` varchar(255) DEFAULT NULL,
  `KatID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `kategorien`
--

INSERT INTO `kategorien` (`Kategorie`, `KatID`) VALUES
('Bekleidung', 1),
('Schmuck', 2),
('Repliken', 3),
('Schuhe', 4),
('Zubehör', 5),
('Zauberstäbe', 6),
('Taschen', 7);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `status`
--

CREATE TABLE `status` (
  `StatusID` int(11) NOT NULL,
  `Status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `status`
--

INSERT INTO `status` (`StatusID`, `Status`) VALUES
(1, 'Admin'),
(2, 'Kunde');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `waehrungen`
--

CREATE TABLE `waehrungen` (
  `Waehrung` varchar(20) DEFAULT NULL,
  `WaehrungsID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `waehrungen`
--

INSERT INTO `waehrungen` (`Waehrung`, `WaehrungsID`) VALUES
('€', 1);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `artikel`
--
ALTER TABLE `artikel`
  ADD PRIMARY KEY (`ArtID`);

--
-- Indizes für die Tabelle `artikelfandoms`
--
ALTER TABLE `artikelfandoms`
  ADD PRIMARY KEY (`ArtFandomID`),
  ADD KEY `ArtID` (`ArtID`),
  ADD KEY `FandomID` (`FandomID`);

--
-- Indizes für die Tabelle `artikelfarben`
--
ALTER TABLE `artikelfarben`
  ADD PRIMARY KEY (`ArtFarbID`),
  ADD KEY `FarbID` (`FarbID`),
  ADD KEY `ArtID` (`ArtID`);

--
-- Indizes für die Tabelle `artikelkategorien`
--
ALTER TABLE `artikelkategorien`
  ADD PRIMARY KEY (`ArtKatID`),
  ADD KEY `KatID` (`KatID`),
  ADD KEY `ArtID` (`ArtID`);

--
-- Indizes für die Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  ADD PRIMARY KEY (`BenID`),
  ADD UNIQUE KEY `Benutzername` (`Benutzername`),
  ADD KEY `artikel` (`StatusID`);

--
-- Indizes für die Tabelle `benutzerwunschliste`
--
ALTER TABLE `benutzerwunschliste`
  ADD PRIMARY KEY (`WunschID`),
  ADD KEY `BenID` (`BenID`),
  ADD KEY `ArtID` (`ArtID`);

--
-- Indizes für die Tabelle `fandoms`
--
ALTER TABLE `fandoms`
  ADD PRIMARY KEY (`FandomID`);

--
-- Indizes für die Tabelle `farben`
--
ALTER TABLE `farben`
  ADD PRIMARY KEY (`FarbID`);

--
-- Indizes für die Tabelle `kategorien`
--
ALTER TABLE `kategorien`
  ADD PRIMARY KEY (`KatID`);

--
-- Indizes für die Tabelle `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`StatusID`);

--
-- Indizes für die Tabelle `waehrungen`
--
ALTER TABLE `waehrungen`
  ADD PRIMARY KEY (`WaehrungsID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `artikel`
--
ALTER TABLE `artikel`
  MODIFY `ArtID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT für Tabelle `artikelfandoms`
--
ALTER TABLE `artikelfandoms`
  MODIFY `ArtFandomID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `artikelfarben`
--
ALTER TABLE `artikelfarben`
  MODIFY `ArtFarbID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `artikelkategorien`
--
ALTER TABLE `artikelkategorien`
  MODIFY `ArtKatID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT für Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  MODIFY `BenID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `benutzerwunschliste`
--
ALTER TABLE `benutzerwunschliste`
  MODIFY `WunschID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `fandoms`
--
ALTER TABLE `fandoms`
  MODIFY `FandomID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT für Tabelle `farben`
--
ALTER TABLE `farben`
  MODIFY `FarbID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT für Tabelle `kategorien`
--
ALTER TABLE `kategorien`
  MODIFY `KatID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT für Tabelle `status`
--
ALTER TABLE `status`
  MODIFY `StatusID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `waehrungen`
--
ALTER TABLE `waehrungen`
  MODIFY `WaehrungsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `artikelfandoms`
--
ALTER TABLE `artikelfandoms`
  ADD CONSTRAINT `artikelfandoms_ibfk_1` FOREIGN KEY (`ArtID`) REFERENCES `artikel` (`ArtID`),
  ADD CONSTRAINT `artikelfandoms_ibfk_2` FOREIGN KEY (`FandomID`) REFERENCES `fandoms` (`FandomID`);

--
-- Constraints der Tabelle `artikelfarben`
--
ALTER TABLE `artikelfarben`
  ADD CONSTRAINT `artikelfarben_ibfk_1` FOREIGN KEY (`FarbID`) REFERENCES `farben` (`FarbID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `artikelfarben_ibfk_2` FOREIGN KEY (`ArtID`) REFERENCES `artikel` (`ArtID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `artikelkategorien`
--
ALTER TABLE `artikelkategorien`
  ADD CONSTRAINT `artikelkategorien_ibfk_1` FOREIGN KEY (`KatID`) REFERENCES `kategorien` (`KatID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `artikelkategorien_ibfk_2` FOREIGN KEY (`ArtID`) REFERENCES `artikel` (`ArtID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  ADD CONSTRAINT `artikel` FOREIGN KEY (`StatusID`) REFERENCES `status` (`StatusID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `benutzerwunschliste`
--
ALTER TABLE `benutzerwunschliste`
  ADD CONSTRAINT `benutzerwunschliste_ibfk_1` FOREIGN KEY (`BenID`) REFERENCES `benutzer` (`BenID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `benutzerwunschliste_ibfk_2` FOREIGN KEY (`ArtID`) REFERENCES `artikel` (`ArtID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
