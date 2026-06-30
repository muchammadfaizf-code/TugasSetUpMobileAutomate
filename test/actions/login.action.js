import loginPage from '../pageobjects/login.page'

class LoginAction {
    async enterUsername(username) {
        const fields = await $$(loginPage.usernameInput)
        if (fields.length >= 1) {
            await fields[0].setValue(username)
        }
    }

    async enterPassword(password) {
        const fields = await $$(loginPage.passwordInput)
        if (fields.length >= 2) {
            await fields[1].setValue(password)
        }
    }

    async tapLogin() {
        const btn = await $(loginPage.loginButton)
        await btn.click()
    }

    async isOnLoginPage() {
        const btn = await $(loginPage.loginButton)
        await btn.waitForDisplayed({ timeout: 15000 })
        return btn.isDisplayed()
    }

    async login(username, password) {
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.tapLogin()
    }

    async waitForProducts(timeout = 5000) {
        const el = await $(loginPage.productsTitle)
        await el.waitForDisplayed({ timeout })
        return el.isDisplayed()
    }
}

export default new LoginAction()
