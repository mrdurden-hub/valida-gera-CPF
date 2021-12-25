import { Validate } from './Validate';

export class CreateCpf {
  private rand(min = 100000000, max = 999999999): string {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatted(cpf: string): string {
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
      6,
      9,
    )}-${cpf.slice(9, 11)}`;
  }

  createNewCpf() {
    const cpfWithoutDigits = this.rand();
    const digito1 = Validate.createDigit(cpfWithoutDigits);
    const digito2 = Validate.createDigit(cpfWithoutDigits + digito1);
    const newCpf = cpfWithoutDigits + digito1 + digito2;
    return this.formatted(newCpf);
  }
}
