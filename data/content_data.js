/**
 * @author emakaryan
 * @date 20-11-2021
 */

class ContentData {
    get validName() {return ('Emma Test')}
    get validEmail() {return ('mc@gmail.com')}
    get validSubject() {return ('Testing')}
    get validMessage() {return ('Hi there! I am testing.')}

    get invalidName() {return ('E')}
    get invalidEmail() {return ('mc')}
    get invalidSubject() {return (null)}
    get invalidMessage() {return ('1&Em')}
    
}


module.exports = ContentData