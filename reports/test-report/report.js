$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("form.feature");
formatter.feature({
  "line": 1,
  "name": "Form validation",
  "description": "The HTML form we will be working at is available at:\r\nhttps://www.w3schools.com/php/demo_form_validation_complete.php\r\nThe form contains various input fields: required and optional text fields, radio buttons, and a submit button.\r\nThe validation rules for the form are as follows:\r\nField Validation Rules\r\n___ ___\r\nName Required. + Must only contain letters and whitespace\r\nE-mail Required. + Must contain a valid email address (with @ and .)\r\nWebsite Optional. If present, it must contain a valid URL\r\nComment Optional. Multi-line input field (textarea)\r\nGender Required. Must select one\r\nError messages should be generated if needed, i.e. if the user tries to submit the form without\r\nfilling out the required fields.",
  "id": "form-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1731905769,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 2162983430,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Name empty",
  "description": "",
  "id": "form-validation;name-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "the \"name\" field is empty",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the \"Name is required\" error message should be shown for the \"name\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    }
  ],
  "location": "StepDefsForm.theFieldIsEmpty(String)"
});
formatter.result({
  "duration": 9404955,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 361974424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name is required",
      "offset": 5
    },
    {
      "val": "name",
      "offset": 62
    }
  ],
  "location": "StepDefsForm.theErrorMessageShouldBeShownForTheField(String,String)"
});
formatter.result({
  "duration": 3691505,
  "status": "passed"
});
formatter.after({
  "duration": 981465,
  "status": "passed"
});
formatter.before({
  "duration": 19213186,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 658709461,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Name filled out but invalid",
  "description": "",
  "id": "form-validation;name-filled-out-but-invalid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the \"name\" field is filled out with: \"!!!\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the \"Only letters and white space allowed\" error message should be shown for the \"name\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    },
    {
      "val": "!!!",
      "offset": 38
    }
  ],
  "location": "StepDefsForm.theFieldIsFilledOutWith(String,String)"
});
formatter.result({
  "duration": 30803022,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 1506898478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Only letters and white space allowed",
      "offset": 5
    },
    {
      "val": "name",
      "offset": 82
    }
  ],
  "location": "StepDefsForm.theErrorMessageShouldBeShownForTheField(String,String)"
});
formatter.result({
  "duration": 2343969,
  "status": "passed"
});
formatter.after({
  "duration": 228367,
  "status": "passed"
});
formatter.before({
  "duration": 77413398,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 441313973,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Name filled out and valid",
  "description": "",
  "id": "form-validation;name-filled-out-and-valid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@noerror"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "the \"name\" field is filled out with: \"Justino Figueiredo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "no error message should be shown for the \"name\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    },
    {
      "val": "Justino Figueiredo",
      "offset": 38
    }
  ],
  "location": "StepDefsForm.theFieldIsFilledOutWith(String,String)"
});
formatter.result({
  "duration": 1601989,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 193830501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 42
    }
  ],
  "location": "StepDefsForm.noErrorMessageShouldBeShownForTheField(String)"
});
formatter.result({
  "duration": 3531135,
  "status": "passed"
});
formatter.after({
  "duration": 250605,
  "status": "passed"
});
formatter.before({
  "duration": 6466548,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 1553942494,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Email empty",
  "description": "",
  "id": "form-validation;email-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "the \"email\" field is empty",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the \"Email is required\" error message should be shown for the \"email\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    }
  ],
  "location": "StepDefsForm.theFieldIsEmpty(String)"
});
formatter.result({
  "duration": 105630,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 224615988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required",
      "offset": 5
    },
    {
      "val": "email",
      "offset": 63
    }
  ],
  "location": "StepDefsForm.theErrorMessageShouldBeShownForTheField(String,String)"
});
formatter.result({
  "duration": 1221806,
  "status": "passed"
});
formatter.after({
  "duration": 231788,
  "status": "passed"
});
formatter.before({
  "duration": 6665834,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 585333540,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Email filled out but invalid",
  "description": "",
  "id": "form-validation;email-filled-out-but-invalid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "the \"email\" field is filled out with: \"JustinoFigueiredo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the \"Invalid email format\" error message should be shown for the \"email\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    },
    {
      "val": "JustinoFigueiredo",
      "offset": 39
    }
  ],
  "location": "StepDefsForm.theFieldIsFilledOutWith(String,String)"
});
formatter.result({
  "duration": 1809830,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 271669414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email format",
      "offset": 5
    },
    {
      "val": "email",
      "offset": 66
    }
  ],
  "location": "StepDefsForm.theErrorMessageShouldBeShownForTheField(String,String)"
});
formatter.result({
  "duration": 1671270,
  "status": "passed"
});
formatter.after({
  "duration": 257020,
  "status": "passed"
});
formatter.before({
  "duration": 7841881,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 372746587,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Email filled out and valid",
  "description": "",
  "id": "form-validation;email-filled-out-and-valid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@noerror"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "the \"email\" field is filled out with: \"JustinoFigueiredo@email.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "no error message should be shown for the \"email\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    },
    {
      "val": "JustinoFigueiredo@email.com",
      "offset": 39
    }
  ],
  "location": "StepDefsForm.theFieldIsFilledOutWith(String,String)"
});
formatter.result({
  "duration": 1931711,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 213357584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 42
    }
  ],
  "location": "StepDefsForm.noErrorMessageShouldBeShownForTheField(String)"
});
formatter.result({
  "duration": 1623801,
  "status": "passed"
});
formatter.after({
  "duration": 251032,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 51,
  "name": "All fields filled out and valid",
  "description": "",
  "id": "form-validation;all-fields-filled-out-and-valid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@noerror"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "the fields are filled out with: \"\u003cname\u003e\", \"\u003cemail\u003e\", \"\u003cwebsite\u003e\", \"\u003cgender\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "no error message should be shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "form-validation;all-fields-filled-out-and-valid;",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "website",
        "gender"
      ],
      "line": 57,
      "id": "form-validation;all-fields-filled-out-and-valid;;1"
    },
    {
      "cells": [
        "Maria Albertina",
        "maria@example.com",
        "www.maria.com",
        "female"
      ],
      "line": 58,
      "id": "form-validation;all-fields-filled-out-and-valid;;2"
    },
    {
      "cells": [
        "Justino Figueiredo",
        "justino@example.pt",
        "http://www.justino.pt",
        "male"
      ],
      "line": 59,
      "id": "form-validation;all-fields-filled-out-and-valid;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11006089,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 182174806,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "All fields filled out and valid",
  "description": "",
  "id": "form-validation;all-fields-filled-out-and-valid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@noerror"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "the fields are filled out with: \"Maria Albertina\", \"maria@example.com\", \"www.maria.com\", \"female\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "no error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Maria Albertina",
      "offset": 33
    },
    {
      "val": "maria@example.com",
      "offset": 52
    },
    {
      "val": "www.maria.com",
      "offset": 73
    },
    {
      "val": "female",
      "offset": 90
    }
  ],
  "location": "StepDefsForm.theFieldsAreFilledOutWith(String,String,String,String)"
});
formatter.result({
  "duration": 6780873,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 237545662,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.noErrorMessageShouldBeShown()"
});
formatter.result({
  "duration": 6229628,
  "status": "passed"
});
formatter.after({
  "duration": 255737,
  "status": "passed"
});
formatter.before({
  "duration": 5146381,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 210946474,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "All fields filled out and valid",
  "description": "",
  "id": "form-validation;all-fields-filled-out-and-valid;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@noerror"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "the fields are filled out with: \"Justino Figueiredo\", \"justino@example.pt\", \"http://www.justino.pt\", \"male\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "no error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Justino Figueiredo",
      "offset": 33
    },
    {
      "val": "justino@example.pt",
      "offset": 55
    },
    {
      "val": "http://www.justino.pt",
      "offset": 77
    },
    {
      "val": "male",
      "offset": 102
    }
  ],
  "location": "StepDefsForm.theFieldsAreFilledOutWith(String,String,String,String)"
});
formatter.result({
  "duration": 4961635,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 211104278,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.noErrorMessageShouldBeShown()"
});
formatter.result({
  "duration": 4961635,
  "status": "passed"
});
formatter.after({
  "duration": 240341,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 61,
      "value": "# Scenario Outline: All fields filled out and invalid"
    }
  ],
  "line": 63,
  "name": "All fields filled out and invalid",
  "description": "",
  "id": "form-validation;all-fields-filled-out-and-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@noerror"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "the fields are filled out with: \"\u003cname\u003e\", \"\u003cemail\u003e\", \"\u003cwebsite\u003e\", \"\u003cgender\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "a error message should be shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "form-validation;all-fields-filled-out-and-invalid;",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "website",
        "gender"
      ],
      "line": 69,
      "id": "form-validation;all-fields-filled-out-and-invalid;;1"
    },
    {
      "cells": [
        "111",
        "111",
        "111",
        "female"
      ],
      "line": 70,
      "id": "form-validation;all-fields-filled-out-and-invalid;;2"
    },
    {
      "cells": [
        "222",
        "222",
        "222",
        "male"
      ],
      "line": 71,
      "id": "form-validation;all-fields-filled-out-and-invalid;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6081232,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 179459634,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "All fields filled out and invalid",
  "description": "",
  "id": "form-validation;all-fields-filled-out-and-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@noerror"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "the fields are filled out with: \"111\", \"111\", \"111\", \"female\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "a error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 33
    },
    {
      "val": "111",
      "offset": 40
    },
    {
      "val": "111",
      "offset": 47
    },
    {
      "val": "female",
      "offset": 54
    }
  ],
  "location": "StepDefsForm.theFieldsAreFilledOutWith(String,String,String,String)"
});
formatter.result({
  "duration": 2694217,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 184410579,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.aErrorMessageShouldBeShown()"
});
formatter.result({
  "duration": 4205972,
  "status": "passed"
});
formatter.after({
  "duration": 199287,
  "status": "passed"
});
formatter.before({
  "duration": 7376594,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 173455807,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "All fields filled out and invalid",
  "description": "",
  "id": "form-validation;all-fields-filled-out-and-invalid;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@noerror"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "the fields are filled out with: \"222\", \"222\", \"222\", \"male\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "a error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "222",
      "offset": 33
    },
    {
      "val": "222",
      "offset": 40
    },
    {
      "val": "222",
      "offset": 47
    },
    {
      "val": "male",
      "offset": 54
    }
  ],
  "location": "StepDefsForm.theFieldsAreFilledOutWith(String,String,String,String)"
});
formatter.result({
  "duration": 3144108,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 204958470,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.aErrorMessageShouldBeShown()"
});
formatter.result({
  "duration": 5527848,
  "status": "passed"
});
formatter.after({
  "duration": 282251,
  "status": "passed"
});
formatter.uri("google.feature");
formatter.feature({
  "line": 1,
  "name": "Google search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5925566,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Finding some cheese",
  "description": "",
  "id": "google-search;finding-some-cheese",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the Google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for \"Cheese!\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the page title should start with \"Cheese!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsGoogle.iAmOnTheGoogleSearchPage()"
});
formatter.result({
  "duration": 412243804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cheese!",
      "offset": 14
    }
  ],
  "location": "StepdefsGoogle.iSearchFor(String)"
});
formatter.result({
  "duration": 1553910421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cheese!",
      "offset": 34
    }
  ],
  "location": "StepdefsGoogle.thePageTitleShouldStartWith(String)"
});
formatter.result({
  "duration": 966069,
  "status": "passed"
});
formatter.after({
  "duration": 7104607,
  "status": "passed"
});
formatter.uri("target/test-classes/form.feature");
formatter.feature({
  "line": 1,
  "name": "Form validation",
  "description": "The HTML form we will be working at is available at:\r\nhttps://www.w3schools.com/php/demo_form_validation_complete.php\r\nThe form contains various input fields: required and optional text fields, radio buttons, and a submit button.\r\nThe validation rules for the form are as follows:\r\nField Validation Rules\r\n___ ___\r\nName Required. + Must only contain letters and whitespace\r\nE-mail Required. + Must contain a valid email address (with @ and .)\r\nWebsite Optional. If present, it must contain a valid URL\r\nComment Optional. Multi-line input field (textarea)\r\nGender Required. Must select one\r\nError messages should be generated if needed, i.e. if the user tries to submit the form without\r\nfilling out the required fields.",
  "id": "form-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7330836,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 196422508,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Name empty",
  "description": "",
  "id": "form-validation;name-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "the \"name\" field is empty",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the \"Name is required\" error message should be shown for the \"name\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    }
  ],
  "location": "StepDefsForm.theFieldIsEmpty(String)"
});
formatter.result({
  "duration": 165502,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 183861043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name is required",
      "offset": 5
    },
    {
      "val": "name",
      "offset": 62
    }
  ],
  "location": "StepDefsForm.theErrorMessageShouldBeShownForTheField(String,String)"
});
formatter.result({
  "duration": 1150388,
  "status": "passed"
});
formatter.after({
  "duration": 267283,
  "status": "passed"
});
formatter.before({
  "duration": 9586707,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 230440629,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Name filled out but invalid",
  "description": "",
  "id": "form-validation;name-filled-out-but-invalid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the \"name\" field is filled out with: \"!!!\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the \"Only letters and white space allowed\" error message should be shown for the \"name\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    },
    {
      "val": "!!!",
      "offset": 38
    }
  ],
  "location": "StepDefsForm.theFieldIsFilledOutWith(String,String)"
});
formatter.result({
  "duration": 561937,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 276519859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Only letters and white space allowed",
      "offset": 5
    },
    {
      "val": "name",
      "offset": 82
    }
  ],
  "location": "StepDefsForm.theErrorMessageShouldBeShownForTheField(String,String)"
});
formatter.result({
  "duration": 1240623,
  "status": "passed"
});
formatter.after({
  "duration": 1515604,
  "status": "passed"
});
formatter.before({
  "duration": 12259541,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 196464418,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Name filled out and valid",
  "description": "",
  "id": "form-validation;name-filled-out-and-valid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@noerror"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "the \"name\" field is filled out with: \"Justino Figueiredo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "no error message should be shown for the \"name\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    },
    {
      "val": "Justino Figueiredo",
      "offset": 38
    }
  ],
  "location": "StepDefsForm.theFieldIsFilledOutWith(String,String)"
});
formatter.result({
  "duration": 896789,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 205594819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 42
    }
  ],
  "location": "StepDefsForm.noErrorMessageShouldBeShownForTheField(String)"
});
formatter.result({
  "duration": 870702,
  "status": "passed"
});
formatter.after({
  "duration": 215965,
  "status": "passed"
});
formatter.before({
  "duration": 5618083,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 195132705,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Email empty",
  "description": "",
  "id": "form-validation;email-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "the \"email\" field is empty",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the \"Email is required\" error message should be shown for the \"email\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    }
  ],
  "location": "StepDefsForm.theFieldIsEmpty(String)"
});
formatter.result({
  "duration": 160798,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 209851682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required",
      "offset": 5
    },
    {
      "val": "email",
      "offset": 63
    }
  ],
  "location": "StepDefsForm.theErrorMessageShouldBeShownForTheField(String,String)"
});
formatter.result({
  "duration": 1157230,
  "status": "passed"
});
formatter.after({
  "duration": 201853,
  "status": "passed"
});
formatter.before({
  "duration": 8973025,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 190789029,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Email filled out but invalid",
  "description": "",
  "id": "form-validation;email-filled-out-but-invalid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "the \"email\" field is filled out with: \"JustinoFigueiredo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the \"Invalid email format\" error message should be shown for the \"email\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    },
    {
      "val": "JustinoFigueiredo",
      "offset": 39
    }
  ],
  "location": "StepDefsForm.theFieldIsFilledOutWith(String,String)"
});
formatter.result({
  "duration": 625229,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 187128743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email format",
      "offset": 5
    },
    {
      "val": "email",
      "offset": 66
    }
  ],
  "location": "StepDefsForm.theErrorMessageShouldBeShownForTheField(String,String)"
});
formatter.result({
  "duration": 1174764,
  "status": "passed"
});
formatter.after({
  "duration": 967779,
  "status": "passed"
});
formatter.before({
  "duration": 8936247,
  "status": "passed"
});
formatter.background({
  "line": 15,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 288320100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Email filled out and valid",
  "description": "",
  "id": "form-validation;email-filled-out-and-valid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@noerror"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "the \"email\" field is filled out with: \"JustinoFigueiredo@email.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "no error message should be shown for the \"email\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    },
    {
      "val": "JustinoFigueiredo@email.com",
      "offset": 39
    }
  ],
  "location": "StepDefsForm.theFieldIsFilledOutWith(String,String)"
});
formatter.result({
  "duration": 1157658,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 498572065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 42
    }
  ],
  "location": "StepDefsForm.noErrorMessageShouldBeShownForTheField(String)"
});
formatter.result({
  "duration": 710760,
  "status": "passed"
});
formatter.after({
  "duration": 212971,
  "status": "passed"
});
});