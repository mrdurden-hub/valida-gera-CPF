export class Validate {
  cpfClear: string;
  newCpf: string;

  constructor(private readonly cpf: string) {
    this.cleanUpString();
    this.startValidate();
  }

  startValidate(): boolean {
    if (!this.cpfClear) return false;
    if (typeof this.cpfClear !== 'string') return false;
    if (this.cpfClear.length !== 11) return false;
    if (this.isSequence(this.cpfClear)) return false;
    this.createNewCpf();
    return this.newCpf === this.cpfClear;
  }

  cleanUpString(): void {
    this.cpfClear = this.cpf.replace(/\D+/g, '');
  }

  isSequence(cpfClear: string): boolean {
    return cpfClear.charAt(0).repeat(11) === this.cpfClear;
  }

  createNewCpf() {
    const cpfWithoutDigits = this.cpfClear.slice(0, -2);
    const digito1 = Validate.createDigit(cpfWithoutDigits);
    const digito2 = Validate.createDigit(cpfWithoutDigits + digito1);
    this.newCpf = cpfWithoutDigits + digito1 + digito2;
  }

  static createDigit(cpfSemDigitos: string) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (const stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }
}
