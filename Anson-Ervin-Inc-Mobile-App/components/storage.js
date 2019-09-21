import { AsyncStorage } from 'react-native'
export default class Database {
    // findEmployeeInDatabase(username, password){
	// 	return new Promise((resolve, reject) => {
	// 		EmployeeModel.findOne({ username, password}, function(err, doc){
	// 			if(err) return reject(err);
	// 			if(!doc) return resolve(null);
	// 			else return resolve(doc)
	// 		})
	// 	})
    // }
    
    // hasEmployeeRegistered(phoneNumber){
    
    //     return new Promise((resolve, reject) => {
    //         this.findEmployeeInDatabase(phoneNumber).then(user => {
    //             resolve(!!user);
    //         }, reject);
    //     })
    // }
    
    // updateEmployee(phoneNumber, prop, value){
    //     // finish check to ensure stock list isn't already created.
    //     return new Promise((resolve, reject) => {
    //         this.findEmployeeInDatabase(phoneNumber).then(docs => {
    //             docs[prop] = value;
    //             docs.save(function(err, updatedDoc){
    //                 if(err) reject(err);
    //                 resolve(updatedDoc);
    //             })
    //         }, reject)
    //     })
    // }

    // employeeRegister(employeeInfo){
    //     /**
    //      * Required data if a user signs up
    //      * @signUpInformation = {
    //      *  username: string,
    //      *  password: string,
    //      *  accessLevel: number,
    //      *  signUpDate: Date,
    //      *  firstName: string,
    //      *  lastName: string,
    //      *  email: string,
    //      *  phoneNumber: string
    //      * }
    //      */
    //     // Assign step number field before saving
    //     // employeeInfo.firstName = Database.firstLetterUpperCase(employeeInfo.firstName)
    //     // employeeInfo.lastName = Database.firstLetterUpperCase(employeeInfo.firstName)
    //     employeeInfo.email = employeeInfo.email.toLowerCase();
    
    //     return new Promise((resolve, reject) => {
    //         this.hasEmployeeRegistered(employeeInfo.phoneNumber).then(hasEmployeeRegistered => {
    //             if(hasEmployeeRegistered) return reject('Customer has already signed up.')
    //             const employee = new EmployeeModel(employeeInfo)
        
    //             // saving employee to database
    //             employee.save(function(err, updatedDoc){
    //                 if(err) reject(err);
    //                 resolve()
    //             })
    //         })
    //     })
    // }

    // getEmployee(){
    //     return new Promise((resolve, reject) => {
    //         AsyncStorage.getItem('user')
    //         .then(user => !!user ? resolve(user) : reject('User not signed in.'))
    //     })
    // }

    // employeeLogin(username, password){
    //     /**
    //      * Required data if a user signs up
    //      * @signInInformation = {
    //      *  username: string,
    //      *  password: string,
    //      * }
    //      */
    //     return new Promise((resolve, reject) => {
    //         EmployeeModel.findOne({ username, password }, function(err, doc){
    //             if(err) return reject(err);
    //             if(!doc) return reject(null);
    //             else {
    //                 AsyncStorage.setItem('user', doc).then(resolve)
    //             }
    //         })
    //     })
    // }

    // employeeSignOut(){
        
    //     return new Promise((resolve, reject) => {
    //         AsyncStorage.removeItem('user').then(resolve)
    //     })
    // }
}
