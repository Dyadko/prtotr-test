var sideBar = require('./pages/sideBar.js');
var userProfile = require('./pages/userProfile.js');

describe('User Profile', function () {

    beforeAll(function () {
        browser.get('https://demos.creative-tim.com/now-ui-dashboard-angular');
    });

    it('should navigate to User Profile', function () {
        sideBar.navigateTo(sideBar.userProfile);
        expect(browser.getCurrentUrl()).toContain("user-profile");
    });

    it('should be possible to fill in Username field', function () {
        var inputText = 'Sumnuj Kavun';
        userProfile.username.clear().sendKeys(inputText);
        
        expect(userProfile.getValueOf(userProfile.username)).toEqual(inputText);
    });

    it('should be possible to fill in First Name field', function () {
        var inputText = 'Sumnuj';
        userProfile.firstname.clear().sendKeys(inputText);
        
        expect(userProfile.getValueOf(userProfile.firstname)).toEqual(inputText);
    });

    it('should be possible to fill in Last Name field', function () {
        var inputText = 'Kavun';
        userProfile.lastname.clear().sendKeys(inputText);
        
        expect(userProfile.getValueOf(userProfile.lastname)).toEqual(inputText);
    });

    it('should be possible to fill in Email field', function () {
        var inputText = 'Sumnuj.Kavun@test.tst';
        userProfile.email.clear().sendKeys(inputText);
        
        expect(userProfile.getValueOf(userProfile.email)).toEqual(inputText);
    });

    it('should be possible to fill in City field', function () {
        var inputText = 'Mala Oleksandrivka';
        userProfile.city.clear().sendKeys(inputText);
        
        expect(userProfile.getValueOf(userProfile.city)).toEqual(inputText);
    });

    it('should be possible to fill in Country field', function () {
        var inputText = 'Ukraine';
        userProfile.country.clear().sendKeys(inputText);
        
        expect(userProfile.getValueOf(userProfile.country)).toEqual(inputText);
    });

    it('should be possible to fill in ZIP Code field', function () {
        var inputText = '01010';
        userProfile.zipcode.clear().sendKeys(inputText);
        
        expect(userProfile.getValueOf(userProfile.zipcode)).toEqual(inputText);
    });

    it('should be possible to fill in "Here can be your description" field', function () {
        var inputText = 'Irzhavuj';
        userProfile.aboutMe.clear().sendKeys(inputText);
        
        expect(userProfile.getValueOf(userProfile.aboutMe)).toEqual(inputText);
    });

    it('should be possible to fill in Home Address field', function () {
        var inputText = '10101 Mala Oleksandrivka, 22 Tsentralna str.';
        userProfile.homeAddress.clear().sendKeys(inputText);
        
        expect(userProfile.getValueOf(userProfile.homeAddress)).toEqual(inputText);
    });
});