-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Erstellungszeit: 05. Nov 2018 um 09:51
-- Server-Version: 5.7.11
-- PHP-Version: 5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `fanartikel`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `artikel`
--

CREATE TABLE `artikel` (
  `Bezeichnung` varchar(255) DEFAULT NULL,
  `ArtikelNr` int(11) NOT NULL,
  `BildShownFirst` varchar(255) DEFAULT NULL,
  `BildShownSecond` varchar(255) DEFAULT NULL,
  `Preis` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `artikel`
--

INSERT INTO `artikel` (`Bezeichnung`, `ArtikelNr`, `BildShownFirst`, `BildShownSecond`, `Preis`) VALUES
('Tardis Keksdose', 1, 'Keksdose zu.jpg', 'Keksdose offen.jpg', '29.99'),
('Anti-Posession Stiefel', 2, 'Spn_Schuhe_Posession1.jpg', 'Spn_Schuhe_Posession2.jpg', '39.99'),
('Doctor Who Thermo-Becher', 3, 'Doctor_Who_Coffe_Thermo1.jpg', 'Doctor_Who_Coffe_Thermo2.jpg', '7.00'),
('Tardis Handtasche', 4, 'Tardis-Tasche1.jpg', 'Tardis-Tasche2.jpg', '59.99'),
('Sonic Screwdriver 10.Doctor', 5, '10-Sonic1.jpg', '10-Sonic2.jpg', '36.99'),
('Elderstab', 6, 'Elderstab1.jpg', 'Elderstab2.jpg', '13.00'),
('Karte des Rumtreibers Thermoeffekt Tasse', 7, 'Karte-des-Rumtreibers-Tasse1.jpg', 'Karte-des-Rumtreibers-Tasse2.jpg', '9.85'),
('Slytherin Notizbuch', 8, 'Slytherin-Notizbuch1.jpg', 'Slytherin-Notizbuch2.jpg', '34.90'),
('Slytherin Lesezeichen', 9, 'Slytherin-Lesezeichen1.jpg', 'Slytherin-Lesezeichen2.jpg', '14.90'),
('Flauschedecke Mittelerde', 10, 'Flauschedecke_Mittelerde1.jpg', 'Flauschedecke_Mittelerde2.jpg', '24.90'),
('Die Eine Uhr', 11, 'Die-eine-Uhr1.jpg', 'Die-eine-Uhr2.jpg', '39.90'),
('Die Eine Bettwäsche', 12, 'LotR-Bettwaesche1.jpg', 'LotR-Bettwaesche2.jpg', '34.90'),
('Tardis Wecker mit Projektion', 13, 'Tardis-Wecker1.jpg', 'Tardis-Wecker2.jpg', '39.90'),
('Tardis Shirt', 14, 'Tardis-Shirt1.jpg', 'Tardis-Shirt2.jpg', '15.00'),
('Slytherin Shirt', 15, 'Slytherin-Shirt1.jpg', 'Slytherin-Shirt2.jpg', '15.00'),
('Slytherin Schlafanzug', 16, 'Slytherin-Schlafanzug1.jpg', 'Slytherin-Schlafanzug2.jpg', '34.9'),
('Tardis - Phone Case', 17, 'PhoneCase1.jpg', NULL, '2.99');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `artikel`
--
ALTER TABLE `artikel`
  ADD PRIMARY KEY (`ArtikelNr`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `artikel`
--
ALTER TABLE `artikel`
  MODIFY `ArtikelNr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
