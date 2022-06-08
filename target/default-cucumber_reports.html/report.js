$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("images.feature");
formatter.feature({
  "line": 2,
  "name": "Images Test",
  "description": "",
  "id": "images-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@images"
    }
  ]
});
formatter.before({
  "duration": 2561819000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Images Control",
  "description": "",
  "id": "images-test;images-control",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigate to webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see url include \u0027https://www.trendyol.com/\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I closed \u0027AddPopupCloseBtn\u0027 popup form",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "image link control",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.iNavigateToWebpage()"
});
formatter.result({
  "duration": 6762127200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.trendyol.com/",
      "offset": 26
    }
  ],
  "location": "BaseSteps.iShouldSeeUrlInclude(String)"
});
formatter.result({
  "duration": 20571600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AddPopupCloseBtn",
      "offset": 10
    }
  ],
  "location": "BaseSteps.iClosedPopupForm(String)"
});
formatter.result({
  "duration": 151762800,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.imageLinkControl()"
});
formatter.result({
  "duration": 109334021700,
  "status": "passed"
});
formatter.after({
  "duration": 763050200,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 1521739600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Success Login Control",
  "description": "",
  "id": "login-test;success-login-control",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigate to webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see url include \u0027https://www.trendyol.com/\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I closed \u0027AddPopupCloseBtn\u0027 popup form",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click a \u0027firsLoginBtn\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see url include \u0027/giris?\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I fill \u0027txtMail\u0027 by \u0027id\u0027 textbox as \u0027testtrendyol@outlook.com\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill \u0027txtPassword\u0027 by \u0027id\u0027 textbox as \u0027Vardar!123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click a \u0027btnLogin\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see \u0027myAccountInfo\u0027 by \u0027className\u0027 text is \u0027Hesabım\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see url include \u0027/butik/liste\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.iNavigateToWebpage()"
});
formatter.result({
  "duration": 6679975000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.trendyol.com/",
      "offset": 26
    }
  ],
  "location": "BaseSteps.iShouldSeeUrlInclude(String)"
});
formatter.result({
  "duration": 23709800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AddPopupCloseBtn",
      "offset": 10
    }
  ],
  "location": "BaseSteps.iClosedPopupForm(String)"
});
formatter.result({
  "duration": 209205000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firsLoginBtn",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 29
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 5417836200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/giris?",
      "offset": 26
    }
  ],
  "location": "BaseSteps.iShouldSeeUrlInclude(String)"
});
formatter.result({
  "duration": 14366800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txtMail",
      "offset": 8
    },
    {
      "val": "id",
      "offset": 21
    },
    {
      "val": "testtrendyol@outlook.com",
      "offset": 37
    }
  ],
  "location": "BaseSteps.iFillTextboxAs(String,String,String)"
});
formatter.result({
  "duration": 1726200800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txtPassword",
      "offset": 8
    },
    {
      "val": "id",
      "offset": 25
    },
    {
      "val": "Vardar!123",
      "offset": 41
    }
  ],
  "location": "BaseSteps.iFillTextboxAs(String,String,String)"
});
formatter.result({
  "duration": 1602355900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btnLogin",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 25
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 1617286000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccountInfo",
      "offset": 14
    },
    {
      "val": "className",
      "offset": 33
    },
    {
      "val": "Hesabım",
      "offset": 53
    }
  ],
  "location": "BaseSteps.iShouldSeeTextIs(String,String,String)"
});
formatter.result({
  "duration": 5026233200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/butik/liste",
      "offset": 26
    }
  ],
  "location": "BaseSteps.iShouldSeeUrlInclude(String)"
});
formatter.result({
  "duration": 129621500,
  "status": "passed"
});
formatter.after({
  "duration": 755201500,
  "status": "passed"
});
formatter.before({
  "duration": 1693572300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login With Invalid User Control",
  "description": "",
  "id": "login-test;login-with-invalid-user-control",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I navigate to webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I should see url include \u0027https://www.trendyol.com/\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I closed \u0027AddPopupCloseBtn\u0027 popup form",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click a \u0027firsLoginBtn\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see url include \u0027/giris?\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I fill \u0027txtMail\u0027 by \u0027id\u0027 textbox as \u0027testtrendyol@outlook.com\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I fill \u0027txtPassword\u0027 by \u0027id\u0027 textbox as \u0027Vardar!1234\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click a \u0027btnLogin\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see \u0027errorMessage\u0027 by \u0027xpath\u0027 text is \u0027E-posta adresiniz ve/veya şifreniz hatalı.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.iNavigateToWebpage()"
});
formatter.result({
  "duration": 6432935400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.trendyol.com/",
      "offset": 26
    }
  ],
  "location": "BaseSteps.iShouldSeeUrlInclude(String)"
});
formatter.result({
  "duration": 13738600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AddPopupCloseBtn",
      "offset": 10
    }
  ],
  "location": "BaseSteps.iClosedPopupForm(String)"
});
formatter.result({
  "duration": 154008800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firsLoginBtn",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 29
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 5355130900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/giris?",
      "offset": 26
    }
  ],
  "location": "BaseSteps.iShouldSeeUrlInclude(String)"
});
formatter.result({
  "duration": 14801100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txtMail",
      "offset": 8
    },
    {
      "val": "id",
      "offset": 21
    },
    {
      "val": "testtrendyol@outlook.com",
      "offset": 37
    }
  ],
  "location": "BaseSteps.iFillTextboxAs(String,String,String)"
});
formatter.result({
  "duration": 1697280400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txtPassword",
      "offset": 8
    },
    {
      "val": "id",
      "offset": 25
    },
    {
      "val": "Vardar!1234",
      "offset": 41
    }
  ],
  "location": "BaseSteps.iFillTextboxAs(String,String,String)"
});
formatter.result({
  "duration": 1615293600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btnLogin",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 25
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 1614543100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "errorMessage",
      "offset": 14
    },
    {
      "val": "xpath",
      "offset": 32
    },
    {
      "val": "E-posta adresiniz ve/veya şifreniz hatalı.",
      "offset": 48
    }
  ],
  "location": "BaseSteps.iShouldSeeTextIs(String,String,String)"
});
formatter.result({
  "duration": 1543171100,
  "status": "passed"
});
formatter.after({
  "duration": 700463000,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 2,
  "name": "Search Product And Add To Chart Test",
  "description": "",
  "id": "search-product-and-add-to-chart-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.before({
  "duration": 1489916400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I navigate to webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see url include \u0027https://www.trendyol.com/\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I closed \u0027AddPopupCloseBtn\u0027 popup form",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click a \u0027firsLoginBtn\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see url include \u0027/giris?\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I fill \u0027txtMail\u0027 by \u0027id\u0027 textbox as \u0027testtrendyol@outlook.com\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill \u0027txtPassword\u0027 by \u0027id\u0027 textbox as \u0027Vardar!123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click a \u0027btnLogin\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see \u0027myAccountInfo\u0027 by \u0027className\u0027 text is \u0027Hesabım\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.iNavigateToWebpage()"
});
formatter.result({
  "duration": 6732778900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.trendyol.com/",
      "offset": 26
    }
  ],
  "location": "BaseSteps.iShouldSeeUrlInclude(String)"
});
formatter.result({
  "duration": 25268900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AddPopupCloseBtn",
      "offset": 10
    }
  ],
  "location": "BaseSteps.iClosedPopupForm(String)"
});
formatter.result({
  "duration": 201403600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firsLoginBtn",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 29
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 5995266500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/giris?",
      "offset": 26
    }
  ],
  "location": "BaseSteps.iShouldSeeUrlInclude(String)"
});
formatter.result({
  "duration": 19728400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txtMail",
      "offset": 8
    },
    {
      "val": "id",
      "offset": 21
    },
    {
      "val": "testtrendyol@outlook.com",
      "offset": 37
    }
  ],
  "location": "BaseSteps.iFillTextboxAs(String,String,String)"
});
formatter.result({
  "duration": 1717822700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txtPassword",
      "offset": 8
    },
    {
      "val": "id",
      "offset": 25
    },
    {
      "val": "Vardar!123",
      "offset": 41
    }
  ],
  "location": "BaseSteps.iFillTextboxAs(String,String,String)"
});
formatter.result({
  "duration": 1666078100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btnLogin",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 25
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 1590450500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccountInfo",
      "offset": 14
    },
    {
      "val": "className",
      "offset": 33
    },
    {
      "val": "Hesabım",
      "offset": 53
    }
  ],
  "location": "BaseSteps.iShouldSeeTextIs(String,String,String)"
});
formatter.result({
  "duration": 5707142300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search GamingPC And Add To Chart Successfully",
  "description": "",
  "id": "search-product-and-add-to-chart-test;search-gamingpc-and-add-to-chart-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I fill \u0027SearchTextArea\u0027 by \u0027className\u0027 textbox as \u0027Oyuncu Bilgisayarı\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click a \u0027SearchIcon\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see url include \u0027sr?q\u003dOyuncu\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I fill \u0027BandTypeSearchTextArea\u0027 by \u0027xpath\u0027 textbox as \u0027Monster\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click a \u0027BandTypeCheckBox\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click a \u0027PriceDropDown\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I fill \u0027PriceMinTextSearchArea\u0027 by \u0027xpath\u0027 textbox as \u00273000\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I fill \u0027PriceMaxTextSearchArea\u0027 by \u0027xpath\u0027 textbox as \u002710000\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click a \u0027PriceFilterSearchIcon\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click a \u0027SelectProductItem\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Switch to new tab",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click a \u0027ProductAddToBasket\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "SearchTextArea",
      "offset": 8
    },
    {
      "val": "className",
      "offset": 28
    },
    {
      "val": "Oyuncu Bilgisayarı",
      "offset": 51
    }
  ],
  "location": "BaseSteps.iFillTextboxAs(String,String,String)"
});
formatter.result({
  "duration": 1699420000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchIcon",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 27
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 7180013700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sr?q\u003dOyuncu",
      "offset": 26
    }
  ],
  "location": "BaseSteps.iShouldSeeUrlInclude(String)"
});
formatter.result({
  "duration": 179756500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BandTypeSearchTextArea",
      "offset": 8
    },
    {
      "val": "xpath",
      "offset": 36
    },
    {
      "val": "Monster",
      "offset": 55
    }
  ],
  "location": "BaseSteps.iFillTextboxAs(String,String,String)"
});
formatter.result({
  "duration": 1981463800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BandTypeCheckBox",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 33
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 1719673900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PriceDropDown",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 30
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 1629535500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PriceMinTextSearchArea",
      "offset": 8
    },
    {
      "val": "xpath",
      "offset": 36
    },
    {
      "val": "3000",
      "offset": 55
    }
  ],
  "location": "BaseSteps.iFillTextboxAs(String,String,String)"
});
formatter.result({
  "duration": 1666648700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PriceMaxTextSearchArea",
      "offset": 8
    },
    {
      "val": "xpath",
      "offset": 36
    },
    {
      "val": "10000",
      "offset": 55
    }
  ],
  "location": "BaseSteps.iFillTextboxAs(String,String,String)"
});
formatter.result({
  "duration": 1607595200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PriceFilterSearchIcon",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 38
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 1656326100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SelectProductItem",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 34
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 1841037100,
  "status": "passed"
});
formatter.match({
  "location": "BaseSteps.switchToNewTab()"
});
formatter.result({
  "duration": 16185000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ProductAddToBasket",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 35
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 8425319500,
  "status": "passed"
});
formatter.after({
  "duration": 791416200,
  "status": "passed"
});
formatter.before({
  "duration": 1675402700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I navigate to webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see url include \u0027https://www.trendyol.com/\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I closed \u0027AddPopupCloseBtn\u0027 popup form",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click a \u0027firsLoginBtn\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see url include \u0027/giris?\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I fill \u0027txtMail\u0027 by \u0027id\u0027 textbox as \u0027testtrendyol@outlook.com\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill \u0027txtPassword\u0027 by \u0027id\u0027 textbox as \u0027Vardar!123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click a \u0027btnLogin\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see \u0027myAccountInfo\u0027 by \u0027className\u0027 text is \u0027Hesabım\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.iNavigateToWebpage()"
});
formatter.result({
  "duration": 6763596000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.trendyol.com/",
      "offset": 26
    }
  ],
  "location": "BaseSteps.iShouldSeeUrlInclude(String)"
});
formatter.result({
  "duration": 13728900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AddPopupCloseBtn",
      "offset": 10
    }
  ],
  "location": "BaseSteps.iClosedPopupForm(String)"
});
formatter.result({
  "duration": 176388400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firsLoginBtn",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 29
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 5638660600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/giris?",
      "offset": 26
    }
  ],
  "location": "BaseSteps.iShouldSeeUrlInclude(String)"
});
formatter.result({
  "duration": 26705100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txtMail",
      "offset": 8
    },
    {
      "val": "id",
      "offset": 21
    },
    {
      "val": "testtrendyol@outlook.com",
      "offset": 37
    }
  ],
  "location": "BaseSteps.iFillTextboxAs(String,String,String)"
});
formatter.result({
  "duration": 1711338200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txtPassword",
      "offset": 8
    },
    {
      "val": "id",
      "offset": 25
    },
    {
      "val": "Vardar!123",
      "offset": 41
    }
  ],
  "location": "BaseSteps.iFillTextboxAs(String,String,String)"
});
formatter.result({
  "duration": 1659984500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btnLogin",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 25
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 1594670100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccountInfo",
      "offset": 14
    },
    {
      "val": "className",
      "offset": 33
    },
    {
      "val": "Hesabım",
      "offset": 53
    }
  ],
  "location": "BaseSteps.iShouldSeeTextIs(String,String,String)"
});
formatter.result({
  "duration": 4866252700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Search shirt And Add To Favorite",
  "description": "",
  "id": "search-product-and-add-to-chart-test;search-shirt-and-add-to-favorite",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I fill \u0027SearchTextArea\u0027 by \u0027className\u0027 textbox as \u0027Gömlek\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click a \u0027SearchIcon\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see url include \u0027sr?q\u003dG\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Wait \u00274000\u0027 seconds",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I click a \u0027Blank\u0027 by \u0027xpath\u0027 web element",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I click a \u0027ProductAddFavorite\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click a \u0027GoToFavorite\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click a \u0027AddToBasketFromFavoriteButton\u0027 by \u0027xpath\u0027 web element",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click a \u0027RemoveFromFavoriteButton\u0027 by \u0027xpath\u0027 web element",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "SearchTextArea",
      "offset": 8
    },
    {
      "val": "className",
      "offset": 28
    },
    {
      "val": "Gömlek",
      "offset": 51
    }
  ],
  "location": "BaseSteps.iFillTextboxAs(String,String,String)"
});
formatter.result({
  "duration": 1651134900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchIcon",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 27
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 7284000800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sr?q\u003dG",
      "offset": 26
    }
  ],
  "location": "BaseSteps.iShouldSeeUrlInclude(String)"
});
formatter.result({
  "duration": 513279500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 6
    }
  ],
  "location": "BaseSteps.waitSeconds(String)"
});
formatter.result({
  "duration": 4002849000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blank",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 22
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 1614675100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ProductAddFavorite",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 35
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 1628527900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GoToFavorite",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 29
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 5214387600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AddToBasketFromFavoriteButton",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 46
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 1593670100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RemoveFromFavoriteButton",
      "offset": 11
    },
    {
      "val": "xpath",
      "offset": 41
    }
  ],
  "location": "BaseSteps.iClickAButton(String,String)"
});
formatter.result({
  "duration": 1594286500,
  "status": "passed"
});
formatter.after({
  "duration": 738189700,
  "status": "passed"
});
});