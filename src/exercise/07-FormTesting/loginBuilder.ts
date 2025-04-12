// src/exercise/Exercise04to08/07-FormTesting/loginBuilder.ts

import { build, perBuild } from '@jackfranklin/test-data-bot';
import { faker } from '@faker-js/faker';

export const buildLoginForm = build({
  username: perBuild(() => faker.internet.userName()),
  password: perBuild(() => faker.internet.password()),
});
