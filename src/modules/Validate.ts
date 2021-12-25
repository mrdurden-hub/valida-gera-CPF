export class Validate {
  private cpfClear: string;
  private newCpf: string;

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

  private cleanUpString(): void {
    this.cpfClear = this.cpf.replace(/\D+/g, '');
  }

  private isSequence(cpfClear: string): boolean {
    return cpfClear.charAt(0).repeat(11) === this.cpfClear;
  }

  private createNewCpf() {
    const cpfWithoutDigits = this.cpfClear.slice(0, -2);
    const digit1 = Validate.createDigit(cpfWithoutDigits);
    const digit2 = Validate.createDigit(cpfWithoutDigits + digit1);
    this.newCpf = cpfWithoutDigits + digit1 + digit2;
  }

  static createDigit(cpfWithoutDigits: string) {
    let total = 0;
    let reverse = cpfWithoutDigits.length + 1;

    for (const stringNumerica of cpfWithoutDigits) {
      total += reverse * Number(stringNumerica);
      reverse--;
    }

    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : '0';
  }
}
