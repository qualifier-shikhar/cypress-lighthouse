Feature: EATestFeature

    Test EA features
    Scenario: Test the login feature
        Given I visit EA site
        Given I click login link
        And I login as following
            | userName| Password |
            |  admin  | password |