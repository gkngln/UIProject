@images
Feature: Images Test
  Scenario: Images Control
    Given I navigate to webpage
    Then  I should see url include 'https://www.trendyol.com/'
    When  I closed 'AddPopupCloseBtn' popup form
    And   image link control