import { AsyncStorage } from 'react-native'

export default class Database {
    hasEmployeeRegistered(phoneNumber){
    
        return new Promise((resolve, reject) => {
            this.findCustomerInDatabase(phoneNumber).then(user => {
                resolve(!!user);
            }, reject);
        })
    }
    
    updateEmployee(phoneNumber, prop, value){
        // finish check to ensure stock list isn't already created.
        return new Promise((resolve, reject) => {
            this.findCustomerInDatabase(phoneNumber).then(docs => {
                docs[prop] = value;
                docs.save(function(err, updatedDoc){
                    if(err) reject(err);
                    resolve(updatedDoc);
                })
            }, reject)
        })
    }

    employeeRegister(employeeInfo){
        /**
         * Required data if a user signs up
         * @signUpInformation = {
         *  username: string,
         *  password: string,
         *  accessLevel: number,
         *  signUpDate: Date,
         *  firstName: string,
         *  lastName: string,
         *  email: string,
         *  phoneNumber: string
         * }
         */
        // Assign step number field before saving
        employeeInfo.firstName = Database.firstLetterUpperCase(employeeInfo.firstName)
        employeeInfo.lastName = Database.firstLetterUpperCase(employeeInfo.firstName)
        employeeInfo.email = employeeInfo.email.toLowerCase();
    
        return new Promise((resolve, reject) => {
            this.hasEmployeeRegistered(employeeInfo.phoneNumber).then(hasEmployeeRegistered => {
                if(hasEmployeeRegistered) return reject('Customer has already signed up.')
                const customer = new CustomerModel(employeeInfo)
        
                // saving customer to database
                customer.save(function(err, updatedDoc){
                    if(err) reject(err);
                    resolve()
                })
            })
        })
    }

    getEmployee(phoneNumber){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem('user')
            .then(user => !!user ? resolve(user) : reject('User not signed up.'))
        })
    }

    employeeLogin(username, password){
        /**
         * Required data if a user signs up
         * @signInInformation = {
         *  username: string,
         *  password: string,
         * }
         */
        return new Promise((resolve, reject) => {
            CustomerModel.findOne({ username, password }, function(err, doc){
                if(err) return reject(err);
                if(!doc) return reject(null);
                else {
                    AsyncStorage.setItem('user', doc).then(resolve)
                }
            })
        })
    }

    employeeSignOut(){
        
        return new Promise((resolve, reject) => {
            AsyncStorage.removeItem('user').then(resolve)
        })
    }
}
