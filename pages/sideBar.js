var SideBar = function () {
    this.sidebar = element(by.tagName('app-sidebar'));
    this.dashboard = this.sidebar.element(by.xpath("//p[contains(text(),'Dashboard')]"));
    this.icons = this.sidebar.element(by.xpath("//p[contains(text(),'Icons')]"));
    this.maps = this.sidebar.element(by.xpath("//p[contains(text(),'Maps')]"));
    this.notifications = this.sidebar.element(by.xpath("//p[contains(text(),'Notifications')]"));
    this.userProfile = this.sidebar.element(by.xpath("//p[contains(text(),'User Profile')]"));
    this.tableList = this.sidebar.element(by.xpath("//p[contains(text(),'Table List')]"));
    this.typography = this.sidebar.element(by.xpath("//p[contains(text(),'Typography')]"));

    this.navigateTo = function (item) {
        item.click();
        return this;
    };

    this.isItemActive = function (item) {
        var class1 = item.getAttribute('class');
        console.log(class1);
        return class1 == 'nav-item active';
    };

    this.goto = function () {
        console.log('navigating to ' + String(baseUrl) + "...");
        browser.get(String(baseUrl));
        return this;
    };

};

module.exports = new SideBar();