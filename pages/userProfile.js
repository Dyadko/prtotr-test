var UserProfile = function () {
    this.userForm = $('.ng-untouched.ng-pristine.ng-valid');
    this.username = this.userForm.$('input[placeholder = "Username"]');
    this.email = this.userForm.$('input[placeholder = "Email"]');
    this.firstname = this.userForm.element(by.xpath('//label[contains(text(),"First Name")]/following-sibling::*[1]'));
    this.lastname = this.userForm.$('input[placeholder = "Last Name"]');
    this.homeAddress = this.userForm.$('input[placeholder = "Home Address"]');
    this.city = this.userForm.$('input[placeholder = "City"]');
    this.country = this.userForm.$('input[placeholder = "Country"]');
    this.zipcode = this.userForm.$('input[placeholder = "ZIP Code"]');
    this.aboutMe = this.userForm.$('textarea[placeholder = "Here can be your description"]');

    this.getValueOf = function(input) {
        return input.getAttribute('value');
    };
};

module.exports = new UserProfile();