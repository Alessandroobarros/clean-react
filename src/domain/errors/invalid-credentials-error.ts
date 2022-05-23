export class InvalidCredentialsError extends Error {
  constructor () {
    super('Crednciais invalidas')
    this.name = 'InvalidCredentialsError'
  }
}
