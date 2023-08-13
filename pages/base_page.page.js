
/**
 * @author emakaryan
 * @date 20-11-2021
 */


const assert = require("assert")
const url_data = require('../data/url_data')


class BasePage {
    navigateStaging(params = '') {
        if (this.requiredPartOfUrl == null)
            browser.url(url_data.getStagingUrl + params)
        else
            browser.url(url_data.getStagingUrl + this.requiredPartOfUrl + params)
    }

    navigateProd(params = '') {
        if (this.requiredPartOfUrl == null)
            browser.url(url_data.getProdUrl + params)
        else
            browser.url(url_data.getProdUrl + this.requiredPartOfUrl + params)
    }
}