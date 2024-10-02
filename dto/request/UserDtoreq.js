
class UserDTO {
    constructor({ username, phone, firstName,middlename,language, lastName, email, city,state,postalCode,streat,country }) {
      this.username = username;
      this.phone = phone;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.language = language; 
      this.middlename = middlename; 
      this.city = city; 
      this.state = state; 
      this.streat = streat; 
      this.country = country; 
      this.postalCode = postalCode; 
    }
  
  }
  
  module.exports = UserDTO;
  