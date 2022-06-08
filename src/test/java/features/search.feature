@search
Feature: Search Product And Add To Chart Test
  Background:
    Given I navigate to webpage
    Then  I should see url include 'https://www.trendyol.com/'
    When  I closed 'AddPopupCloseBtn' popup form
    And   I click a 'firsLoginBtn' by 'xpath' web element
    Then  I should see url include '/giris?'
    When  I fill 'txtMail' by 'id' textbox as 'testtrendyol@outlook.com'
    And   I fill 'txtPassword' by 'id' textbox as 'Vardar!123'
    And   I click a 'btnLogin' by 'xpath' web element
    Then  I should see 'myAccountInfo' by 'className' text is 'Hesabım'

  Scenario: Search GamingPC And Add To Chart Successfully
    When  I fill 'SearchTextArea' by 'className' textbox as 'Oyuncu Bilgisayarı'
    And   I click a 'SearchIcon' by 'xpath' web element
    Then  I should see url include 'sr?q=Oyuncu'
    When  I fill 'BandTypeSearchTextArea' by 'xpath' textbox as 'Monster'
    And   I click a 'BandTypeCheckBox' by 'xpath' web element
    And   I click a 'PriceDropDown' by 'xpath' web element
    And   I fill 'PriceMinTextSearchArea' by 'xpath' textbox as '3000'
    And   I fill 'PriceMaxTextSearchArea' by 'xpath' textbox as '10000'
    And   I click a 'PriceFilterSearchIcon' by 'xpath' web element
    And   I click a 'SelectProductItem' by 'xpath' web element
    And   Switch to new tab
    And   I click a 'ProductAddToBasket' by 'xpath' web element

  Scenario: Search shirt And Add To Favorite
    When  I fill 'SearchTextArea' by 'className' textbox as 'Gömlek'
    And   I click a 'SearchIcon' by 'xpath' web element
    Then  I should see url include 'sr?q=G'
    When  Wait '4000' seconds
    When  I click a 'Blank' by 'xpath' web element
    And   I click a 'ProductAddFavorite' by 'xpath' web element
    And   I click a 'GoToFavorite' by 'xpath' web element
    And   I click a 'AddToBasketFromFavoriteButton' by 'xpath' web element
    When  I click a 'RemoveFromFavoriteButton' by 'xpath' web element