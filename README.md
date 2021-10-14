# Progressive Budget Tracker
Progressive Web App (PWA) - add expenses and deposits to a user budget with or without a connection.

<p align="center">
 <img src="https://img.shields.io/github/repo-size/ssharp0/progressive-budget-tracker">
 <img src="https://img.shields.io/badge/Javascript-yellow">
 <img src="https://img.shields.io/badge/-node.js-green">
 <img src="https://img.shields.io/badge/-mongoDB-purple">
 <img src="https://img.shields.io/badge/-express npm-brown">
 <img src="https://img.shields.io/badge/-mongoose npm-blue">
 <img src="https://img.shields.io/badge/-dotenv npm-grey">
</p>


<br>

### [Heroku Deployed Demo Link](https://pwa-budget-tracker-s01.herokuapp.com/)

### [Github Repo](https://github.com/ssharp0/progressive-budget-tracker)


## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Usage](#usage)
- [Installation](#installation)
- [Screenshots](#screenshots)

## Description

This is an application to track deposits and withdraws on a budget. This is a progressive web app (PWA) so it allows for online/offline access and functionality. When a user is offline they can add and/or withdraw from their total budget - and will be brought back online (with data added to the mongo database when back online). 


## User Story

A user that is travelling (or loses connection to the internet for brief periods) will be able to track withdrawals and deposits with or without a data/internet connection.

## Usage

On the home page, the user will be able to add a transaction by providing a name of the transaction, the transaction amount and the option to either add the funds or subtract the funds. 

Transactions will be added and tallied. 

Note, to use the application offline - open the inspector in the browser and navigate to the 'Network' tab and change 'No throttling' to 'Offline'

## Installation

(Node.js & mongoDB Compass should be installed)

`npm init -y`

`npm i express`

`npm i mongoose`

## Screenshots

Example: 

<kbd>

![](/public/assets/img/budget.png)

![](/public/assets/img/transactions.png)

</kbd>