import { Validate } from './modules/Validate';
import { CreateCpf } from './modules/Create';

const cpf = new CreateCpf().createNewCpf();
const validator = new Validate(cpf).startValidate();

console.log(`This is your cpf: ${cpf}. Valid: ${validator}`);
