module.exports = {
  verbose: true,
  clearMocks: true,
  roots: ['<rootDir>'],
  transform: {'.(ts|tsx|js)': 'ts-jest'},
  setupFilesAfterEnv: ['./jest.setup.ts'],
  snapshotSerializers: ['./node_modules/enzyme-to-json/serializer'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],

}