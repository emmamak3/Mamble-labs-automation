/**
 * @author emakaryan
 * @date 20-11-2021
 */

 const InputData = require('../data/content_data')
 const ID = new InputData

class ContactPage {
    get fullName() {return $('.Input_inputError__j3Lb8')}
    get email() {return $('#Email')}
    get subject() {return $('#Subject')}
    get message() {return $('#Message')}
    get submitBtn() {return $('.Button_button__outline__1aGv4')}
    get requiredPartOfUrl() {return 'contact-us' }


    setValidData () {
        this.fullName.setValue(ID.validName)
        this.email.setValue(ID.validEmail)
        this.subject.setValue(ID.validSubject)
        this.message.setValue(ID.validMessage)
    }

    setInvalidData () {
        this.fullName.setValue(ID.invalidName)
        this.email.setValue(ID.invalidEmail)
        this.subject.setValue(ID.invalidSubject)
        this.message.setValue(ID.invalidSubject)
    }

    submitEmail() {
        this.submitBtn.click()
    }

    // verifyValidInputData() {
    //     assert(this.fullName.getText() ==
    // }

}

module.exports = ContactPage