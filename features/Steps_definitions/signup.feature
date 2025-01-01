Feature: Signup Functionality

Scenario: Registration by new user

Given I am on the homepage of the book cart website
  When I click on the login button
  And I click on the Register button
  And I enter the firstname '<firstname>' correctly
 And I enter the lastname '<lastname>' correctly
 And I enter the username '<username>' correctly
  And I enter the password '<password>' correctly
 And I re-enter the password '<password>' correctly
 And I click on the radio button 
 Then my account should be created successfully



   