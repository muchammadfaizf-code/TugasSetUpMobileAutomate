import loginPage from '../pageobjects/login.page'
import { LoginAction } from '../action/login.action'

const action = new LoginAction()

export default {
    async isOnLoginPage() {
        const btn = await $(loginPage.loginButton)
        await btn.waitForDisplayed({ timeout: 15000 })
        return btn.isDisplayed()
    },

    async login(username, password) {
        await action.login(username, password)
    },

    async waitForProducts(timeout = 5000) {
        const el = await $(loginPage.productsTitle)
        await el.waitForDisplayed({ timeout })
        return el.isDisplayed()
    }
}
