-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 08. Nov 2018 um 12:07
-- Server-Version: 5.6.24
-- PHP-Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `fanartikel`
--
CREATE DATABASE fanartikel;
-- --------------------------------------------------------
USE fanartikel;
--
-- Tabellenstruktur für Tabelle `artikel`
--

CREATE TABLE IF NOT EXISTS `artikel` (
  `Bezeichnung` varchar(255) DEFAULT NULL,
  `ArtID` int(11) NOT NULL,
  `BildShownFirst` varchar(255) DEFAULT NULL,
  `BildShownSecond` varchar(255) DEFAULT NULL,
  `Preis` decimal(15,2) DEFAULT NULL,
  `WaehrungsID` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

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
-- Tabellenstruktur für Tabelle `artikelfarben`
--

CREATE TABLE IF NOT EXISTS `artikelfarben` (
  `FarbID` int(11) DEFAULT NULL,
  `ArtID` int(11) DEFAULT NULL,
  `ArtFarbID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `artikelkategorien`
--

CREATE TABLE IF NOT EXISTS `artikelkategorien` (
  `KatID` int(11) DEFAULT NULL,
  `ArtID` int(11) DEFAULT NULL,
  `ArtKatID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `benutzer`
--

CREATE TABLE IF NOT EXISTS `benutzer` (
  `Vorname` varchar(255) DEFAULT NULL,
  `Nachname` varchar(255) DEFAULT NULL,
  `Adresse` varchar(255) DEFAULT NULL,
  `Postleitzahl` int(11) DEFAULT NULL,
  `Ort` varchar(255) DEFAULT NULL,
  `Benutzername` varchar(255) DEFAULT NULL,
  `Passwort` tinytext,
  `BenID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `benutzerwunschliste`
--

CREATE TABLE IF NOT EXISTS `benutzerwunschliste` (
  `BenID` int(11) DEFAULT NULL,
  `ArtID` int(11) DEFAULT NULL,
  `WunschID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `farben`
--

CREATE TABLE IF NOT EXISTS `farben` (
  `Farbe` varchar(255) DEFAULT NULL,
  `FarbID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `kategorien`
--

CREATE TABLE IF NOT EXISTS `kategorien` (
  `Kategorie` varchar(255) DEFAULT NULL,
  `KatID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `waehrungen`
--

CREATE TABLE IF NOT EXISTS `waehrungen` (
  `Waehrung` varchar(20) DEFAULT NULL,
  `WaehrungsID` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

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
-- Indizes für die Tabelle `artikelfarben`
--
ALTER TABLE `artikelfarben`
  ADD PRIMARY KEY (`ArtFarbID`), ADD KEY `FarbID` (`FarbID`), ADD KEY `ArtID` (`ArtID`);

--
-- Indizes für die Tabelle `artikelkategorien`
--
ALTER TABLE `artikelkategorien`
  ADD PRIMARY KEY (`ArtKatID`), ADD KEY `KatID` (`KatID`), ADD KEY `ArtID` (`ArtID`);

--
-- Indizes für die Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  ADD PRIMARY KEY (`BenID`);

--
-- Indizes für die Tabelle `benutzerwunschliste`
--
ALTER TABLE `benutzerwunschliste`
  ADD PRIMARY KEY (`WunschID`), ADD KEY `BenID` (`BenID`), ADD KEY `ArtID` (`ArtID`);

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
  MODIFY `ArtID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT für Tabelle `artikelfarben`
--
ALTER TABLE `artikelfarben`
  MODIFY `ArtFarbID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `artikelkategorien`
--
ALTER TABLE `artikelkategorien`
  MODIFY `ArtKatID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  MODIFY `BenID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `benutzerwunschliste`
--
ALTER TABLE `benutzerwunschliste`
  MODIFY `WunschID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `farben`
--
ALTER TABLE `farben`
  MODIFY `FarbID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `kategorien`
--
ALTER TABLE `kategorien`
  MODIFY `KatID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `waehrungen`
--
ALTER TABLE `waehrungen`
  MODIFY `WaehrungsID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- Constraints der exportierten Tabellen
--

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
-- Constraints der Tabelle `benutzerwunschliste`
--
ALTER TABLE `benutzerwunschliste`
ADD CONSTRAINT `benutzerwunschliste_ibfk_1` FOREIGN KEY (`BenID`) REFERENCES `benutzer` (`BenID`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `benutzerwunschliste_ibfk_2` FOREIGN KEY (`ArtID`) REFERENCES `artikel` (`ArtID`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
