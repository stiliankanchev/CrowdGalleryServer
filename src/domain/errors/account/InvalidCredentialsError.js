var DescriptiveDomainError = require('../DescriptiveDomainError');

var InvalidCredentialsError = function InvalidCredentialsError(message) {
    this.name = 'InvalidCredentialsError';
    this.message = message || 'The provided login data is incorrect';
};

InvalidCredentialsError.prototype = Object.create(DescriptiveDomainError.prototype);
InvalidCredentialsError.prototype.constructor = InvalidCredentialsError;

module.exports = InvalidCredentialsError;
