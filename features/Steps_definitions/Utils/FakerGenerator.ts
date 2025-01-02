
import { faker } from '@faker-js/faker';

type UserDetails = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
};

class FakerGenerator {
  static generateUserDetails(): UserDetails {
    return {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      username: faker.internet.displayName(),
      password: faker.internet.password(),
    };
  }
}

export default FakerGenerator;




