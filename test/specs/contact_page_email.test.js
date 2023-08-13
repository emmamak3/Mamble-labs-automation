const ContactPage = require ('../../pages/contact_page.page')
const ContentData = require ('data/content_data.js')

const CP = new ContactPage()
const CD = new ContentData()


describe ('Contact Email Test', () => {
    it('Login with valid credentials', () => {
        CP.navigate()
        CP.setValidData()
        CP.submitEmail()










        const netWorthCalc = new NetWorthCalculator()
        netWorthCalc.navigate()
        netWorthCalc.titleIsCorrect()
        netWorthCalc.completeAssetsForm(netWorthCalc.dataOfAssets)
        netWorthCalc.validateTotalAssets()
        netWorthCalc.next()
        netWorthCalc.completeLiabilitiesForm(netWorthCalc.dataOfLiabilities)
        netWorthCalc.validateTotalLiabilities()
        netWorthCalc.calculate()
        netWorthCalc.validateResults()
    })
})

