@login
Feature: Login Test
  Scenario: Success Login Control
    Given I navigate to webpage
    Then  I should see url include 'https://www.trendyol.com/'
    When  I closed 'AddPopupCloseBtn' popup form
    And   I click a 'firsLoginBtn' by 'xpath' web element
    Then  I should see url include '/giris?'
    When  I fill 'txtMail' by 'id' textbox as 'testtrendyol@outlook.com'
    And   I fill 'txtPassword' by 'id' textbox as 'Vardar!123'
    And   I click a 'btnLogin' by 'xpath' web element
    Then  I should see 'myAccountInfo' by 'className' text is 'Hesabım'
    And   I should see url include '/butik/liste'

  Scenario: Login With Invalid User Control
    Given I navigate to webpage
    Then  I should see url include 'https://www.trendyol.com/'
    When  I closed 'AddPopupCloseBtn' popup form
    And   I click a 'firsLoginBtn' by 'xpath' web element
    Then  I should see url include '/giris?'
    When  I fill 'txtMail' by 'id' textbox as 'testtrendyol@outlook.com'
    And   I fill 'txtPassword' by 'id' textbox as 'Vardar!1234'
    And   I click a 'btnLogin' by 'xpath' web element
    Then  I should see 'errorMessage' by 'xpath' text is 'E-posta adresiniz ve/veya şifreniz hatalı.'