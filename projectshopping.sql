-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2023 at 10:46 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectshopping`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `ID` int(11) NOT NULL,
  `NameProduct` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Picture` text NOT NULL,
  `Price` varchar(255) NOT NULL,
  `Quantity` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`ID`, `NameProduct`, `Description`, `Picture`, `Price`, `Quantity`) VALUES
(1, 'หูฟัง', 'หูฟัง', 'D:/csc350 6401679 Napak/react-crud/src/img/adam-birkett-vISNAATFXlE-unsplash.jpg', '1200', '10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Firstname` varchar(255) NOT NULL,
  `Lastname` varchar(255) NOT NULL,
  `Gender` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `Email`, `Password`, `Firstname`, `Lastname`, `Gender`) VALUES
(1, 'Benznapak0@gmail.com', 'Benznapak314140', 'ณภัค', 'ดีมงคล', 'หญิง'),
(2, 'Thanatchaporn0@gmail.com', 'Thanatchaporn1234', 'ธนัชพร', 'ภาคาหาญ', 'หญิง'),
(3, 'ParichatWeankeaw0@gmail.com', 'Parichat2545', 'Parichat', 'Weankeaw', 'หญิง'),
(4, 'Tunwarat_1@gmail.com', 'Tunwarat0705', 'Tunwarat', 'Pimprasan', 'หญิง'),
(5, 'Kanokwan0@gmail.com', 'Kanokwan1234', 'กนกวรรณ', 'สาครชาติ', 'หญิง'),
(6, 'BenzNapak0@gmail.com', 'BenzNapak1234', 'Napak', 'Deemongkhon', 'หญิง');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
