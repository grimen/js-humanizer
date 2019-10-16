/* global jest describe test expect */

// =========================================
//       IMPORTS
// --------------------------------------

const bytesize = require('../src/bytesize')


// =========================================
//       EXTENSIONS
// --------------------------------------

expect.extend(require('jest-tobetype'))


// =========================================
//       TESTS
// --------------------------------------

describe('bytesize', () => {

    test('import', () => {
        expect(bytesize).toBeInstanceOf(Object)
    })

    describe('value', () => {

        const byte = 1
        const kilobyte = 1024 * byte
        const megabyte = 1024 * kilobyte
        const gigabyte = 1024 * megabyte

        test('bytes', async () => {
            let result

            result = bytesize.value(undefined)

            expect(result).toEqual(0)

            result = bytesize.value(null)

            expect(result).toEqual(0)

            result = bytesize.value(0)

            expect(result).toEqual(0)

            result = bytesize.value(1 * byte)

            expect(result).toEqual(1 * byte)

            result = bytesize.value(1 * kilobyte)

            expect(result).toEqual(1 * kilobyte)

            result = bytesize.value(1 * megabyte)

            expect(result).toEqual(1 * megabyte)

            result = bytesize.value(1 * gigabyte)

            expect(result).toEqual(1 * gigabyte)

            result = bytesize.value('0')

            expect(result).toEqual(0 * byte)

            result = bytesize.value('2')

            expect(result).toEqual(2 * byte)

            result = bytesize.value('1000')

            result = bytesize.value('0b')

            expect(result).toEqual(0 * byte)

            result = bytesize.value('0 b')

            expect(result).toEqual(0 * byte)

            result = bytesize.value('0B')

            expect(result).toEqual(0 * byte)

            result = bytesize.value('0 B')

            expect(result).toEqual(0 * byte)

            result = bytesize.value('0byte')

            expect(result).toEqual(0 * byte)

            result = bytesize.value('0 byte')

            expect(result).toEqual(0 * byte)

            result = bytesize.value('0bytes')

            expect(result).toEqual(0 * byte)

            result = bytesize.value('0 bytes')

            expect(result).toEqual(0 * byte)

            result = bytesize.value('0Byte')

            expect(result).toEqual(0 * byte)

            result = bytesize.value('0 Byte')

            expect(result).toEqual(0 * byte)

            result = bytesize.value('0Bytes')

            expect(result).toEqual(0 * byte)

            result = bytesize.value('0 Bytes')

            expect(result).toEqual(0 * byte)

            result = bytesize.value('1b')

            expect(result).toEqual(1 * byte)

            result = bytesize.value('1 b')

            expect(result).toEqual(1 * byte)

            result = bytesize.value('1B')

            expect(result).toEqual(1 * byte)

            result = bytesize.value('1 B')

            expect(result).toEqual(1 * byte)

            result = bytesize.value('1byte')

            expect(result).toEqual(1 * byte)

            result = bytesize.value('1 byte')

            expect(result).toEqual(1 * byte)

            result = bytesize.value('1bytes')

            expect(result).toEqual(1 * byte)

            result = bytesize.value('1 bytes')

            expect(result).toEqual(1 * byte)

            result = bytesize.value('1Byte')

            expect(result).toEqual(1 * byte)

            result = bytesize.value('1 Byte')

            expect(result).toEqual(1 * byte)

            result = bytesize.value('1Bytes')

            expect(result).toEqual(1 * byte)

            result = bytesize.value('1 Bytes')

            expect(result).toEqual(1 * byte)

            result = bytesize.value('2b')

            expect(result).toEqual(2 * byte)

            result = bytesize.value('2 b')

            expect(result).toEqual(2 * byte)

            result = bytesize.value('2B')

            expect(result).toEqual(2 * byte)

            result = bytesize.value('2 B')

            expect(result).toEqual(2 * byte)

            result = bytesize.value('2byte')

            expect(result).toEqual(2 * byte)

            result = bytesize.value('2 byte')

            expect(result).toEqual(2 * byte)

            result = bytesize.value('2bytes')

            expect(result).toEqual(2 * byte)

            result = bytesize.value('2 bytes')

            expect(result).toEqual(2 * byte)

            result = bytesize.value('2Byte')

            expect(result).toEqual(2 * byte)

            result = bytesize.value('2 Byte')

            expect(result).toEqual(2 * byte)

            result = bytesize.value('2Bytes')

            expect(result).toEqual(2 * byte)

            result = bytesize.value('2 Bytes')

            expect(result).toEqual(2 * byte)

            result = bytesize.value('1000b')

            expect(result).toEqual(1000 * byte)

            result = bytesize.value('1000 b')

            expect(result).toEqual(1000 * byte)

            result = bytesize.value('1000B')

            expect(result).toEqual(1000 * byte)

            result = bytesize.value('1000 B')

            expect(result).toEqual(1000 * byte)

            result = bytesize.value('1000byte')

            expect(result).toEqual(1000 * byte)

            result = bytesize.value('1000 byte')

            expect(result).toEqual(1000 * byte)

            result = bytesize.value('1000bytes')

            expect(result).toEqual(1000 * byte)

            result = bytesize.value('1000 bytes')

            expect(result).toEqual(1000 * byte)

            result = bytesize.value('1000Byte')

            expect(result).toEqual(1000 * byte)

            result = bytesize.value('1000 Byte')

            expect(result).toEqual(1000 * byte)

            result = bytesize.value('1000Bytes')

            expect(result).toEqual(1000 * byte)

            result = bytesize.value('1000 Bytes')

            expect(result).toEqual(1000 * byte)
        })

        test('kilobytes', async () => {
            result = bytesize.value('0kb')

            expect(result).toEqual(0 * kilobyte)

            result = bytesize.value('0 kb')

            expect(result).toEqual(0 * kilobyte)

            result = bytesize.value('0kB')

            expect(result).toEqual(0 * kilobyte)

            result = bytesize.value('0 kB')

            expect(result).toEqual(0 * kilobyte)

            result = bytesize.value('0kilobyte')

            expect(result).toEqual(0 * kilobyte)

            result = bytesize.value('0 kilobyte')

            expect(result).toEqual(0 * kilobyte)

            result = bytesize.value('0kilobytes')

            expect(result).toEqual(0 * kilobyte)

            result = bytesize.value('0 kilobytes')

            expect(result).toEqual(0 * kilobyte)

            result = bytesize.value('0.214642524719kb')

            expect(result).toEqual(parseInt(Math.round(0.214642524719 * kilobyte)))

            result = bytesize.value('0.214642524719 kb')

            expect(result).toEqual(parseInt(Math.round(0.214642524719 * kilobyte)))

            result = bytesize.value('0.214642524719KB')

            expect(result).toEqual(parseInt(Math.round(0.214642524719 * kilobyte)))

            result = bytesize.value('0.214642524719 KB')

            expect(result).toEqual(parseInt(Math.round(0.214642524719 * kilobyte)))

            result = bytesize.value('0.214642524719kilobyte')

            expect(result).toEqual(parseInt(Math.round(0.214642524719 * kilobyte)))

            result = bytesize.value('0.214642524719 kilobyte')

            expect(result).toEqual(parseInt(Math.round(0.214642524719 * kilobyte)))

            result = bytesize.value('0.214642524719kilobytes')

            expect(result).toEqual(parseInt(Math.round(0.214642524719 * kilobyte)))

            result = bytesize.value('1kb')

            expect(result).toEqual(1 * kilobyte)

            result = bytesize.value('1 kb')

            expect(result).toEqual(1 * kilobyte)

            result = bytesize.value('1kB')

            expect(result).toEqual(1 * kilobyte)

            result = bytesize.value('1 kB')

            expect(result).toEqual(1 * kilobyte)

            result = bytesize.value('1kilobyte')

            expect(result).toEqual(1 * kilobyte)

            result = bytesize.value('1 kilobyte')

            expect(result).toEqual(1 * kilobyte)

            result = bytesize.value('1kilobytes')

            expect(result).toEqual(1 * kilobyte)

            result = bytesize.value('1 kilobytes')

            expect(result).toEqual(1 * kilobyte)

            result = bytesize.value('2kb')

            expect(result).toEqual(2 * kilobyte)

            result = bytesize.value('2 kb')

            expect(result).toEqual(2 * kilobyte)

            result = bytesize.value('2kB')

            expect(result).toEqual(2 * kilobyte)

            result = bytesize.value('2 kB')

            expect(result).toEqual(2 * kilobyte)

            result = bytesize.value('2kilobyte')

            expect(result).toEqual(2 * kilobyte)

            result = bytesize.value('2 kilobyte')

            expect(result).toEqual(2 * kilobyte)

            result = bytesize.value('2kilobytes')

            expect(result).toEqual(2 * kilobyte)

            result = bytesize.value('2 kilobytes')

            expect(result).toEqual(2 * kilobyte)

            result = bytesize.value('1000kb')

            expect(result).toEqual(1000 * kilobyte)

            result = bytesize.value('1000 kb')

            expect(result).toEqual(1000 * kilobyte)

            result = bytesize.value('1000kB')

            expect(result).toEqual(1000 * kilobyte)

            result = bytesize.value('1000 kB')

            expect(result).toEqual(1000 * kilobyte)

            result = bytesize.value('1000kilobyte')

            expect(result).toEqual(1000 * kilobyte)

            result = bytesize.value('1000 kilobyte')

            expect(result).toEqual(1000 * kilobyte)

            result = bytesize.value('1000kilobytes')

            expect(result).toEqual(1000 * kilobyte)

            result = bytesize.value('1000 kilobytes')

            expect(result).toEqual(1000 * kilobyte)
        })

        test('megabytes', async () => {
            result = bytesize.value('0mb')

            expect(result).toEqual(0 * megabyte)

            result = bytesize.value('0 mb')

            expect(result).toEqual(0 * megabyte)

            result = bytesize.value('0MB')

            expect(result).toEqual(0 * megabyte)

            result = bytesize.value('0 MB')

            expect(result).toEqual(0 * megabyte)

            result = bytesize.value('0megabyte')

            expect(result).toEqual(0 * megabyte)

            result = bytesize.value('0 megabyte')

            expect(result).toEqual(0 * megabyte)

            result = bytesize.value('0megabytes')

            expect(result).toEqual(0 * megabyte)

            result = bytesize.value('0 megabytes')

            expect(result).toEqual(0 * megabyte)

            result = bytesize.value('0.214642524719mb')

            expect(result).toEqual(parseInt(Math.round(0.214642524719 * megabyte)))

            result = bytesize.value('0.214642524719 mb')

            expect(result).toEqual(parseInt(Math.round(0.214642524719 * megabyte)))

            result = bytesize.value('0.214642524719MB')

            expect(result).toEqual(parseInt(Math.round(0.214642524719 * megabyte)))

            result = bytesize.value('0.214642524719 MB')

            expect(result).toEqual(parseInt(Math.round(0.214642524719 * megabyte)))

            result = bytesize.value('0.214642524719megabyte')

            expect(result).toEqual(parseInt(Math.round(0.214642524719 * megabyte)))

            result = bytesize.value('0.214642524719 megabyte')

            expect(result).toEqual(parseInt(Math.round(0.214642524719 * megabyte)))

            result = bytesize.value('0.214642524719megabytes')

            expect(result).toEqual(parseInt(Math.round(0.214642524719 * megabyte)))

            result = bytesize.value('0 megabytes')

            expect(result).toEqual(0 * megabyte)

            result = bytesize.value('1mb')

            expect(result).toEqual(1 * megabyte)

            result = bytesize.value('1 mb')

            expect(result).toEqual(1 * megabyte)

            result = bytesize.value('1MB')

            expect(result).toEqual(1 * megabyte)

            result = bytesize.value('1 MB')

            expect(result).toEqual(1 * megabyte)

            result = bytesize.value('1megabyte')

            expect(result).toEqual(1 * megabyte)

            result = bytesize.value('1 megabyte')

            expect(result).toEqual(1 * megabyte)

            result = bytesize.value('1megabytes')

            expect(result).toEqual(1 * megabyte)

            result = bytesize.value('1 megabytes')

            expect(result).toEqual(1 * megabyte)

            result = bytesize.value('2mb')

            expect(result).toEqual(2 * megabyte)

            result = bytesize.value('2 mb')

            expect(result).toEqual(2 * megabyte)

            result = bytesize.value('2MB')

            expect(result).toEqual(2 * megabyte)

            result = bytesize.value('2 MB')

            expect(result).toEqual(2 * megabyte)

            result = bytesize.value('2megabyte')

            expect(result).toEqual(2 * megabyte)

            result = bytesize.value('2 megabyte')

            expect(result).toEqual(2 * megabyte)

            result = bytesize.value('2megabytes')

            expect(result).toEqual(2 * megabyte)

            result = bytesize.value('2 megabytes')

            expect(result).toEqual(2 * megabyte)

            result = bytesize.value('1000mb')

            expect(result).toEqual(1000 * megabyte)

            result = bytesize.value('1000 mb')

            expect(result).toEqual(1000 * megabyte)

            result = bytesize.value('1000MB')

            expect(result).toEqual(1000 * megabyte)

            result = bytesize.value('1000 MB')

            expect(result).toEqual(1000 * megabyte)

            result = bytesize.value('1000megabyte')

            expect(result).toEqual(1000 * megabyte)

            result = bytesize.value('1000 megabyte')

            expect(result).toEqual(1000 * megabyte)

            result = bytesize.value('1000megabytes')

            expect(result).toEqual(1000 * megabyte)

            result = bytesize.value('1000 megabytes')

            expect(result).toEqual(1000 * megabyte)
        })

        test('gigabytes', async () => {
            result = bytesize.value('0gb')

            expect(result).toEqual(0 * gigabyte)

            result = bytesize.value('0 gb')

            expect(result).toEqual(0 * gigabyte)

            result = bytesize.value('0GB')

            expect(result).toEqual(0 * gigabyte)

            result = bytesize.value('0 GB')

            expect(result).toEqual(0 * gigabyte)

            result = bytesize.value('0gigabyte')

            expect(result).toEqual(0 * gigabyte)

            result = bytesize.value('0 gigabyte')

            expect(result).toEqual(0 * gigabyte)

            result = bytesize.value('0gigabytes')

            expect(result).toEqual(0 * gigabyte)

            result = bytesize.value('0 gigabytes')

            expect(result).toEqual(0 * gigabyte)

            result = bytesize.value('1gb')

            expect(result).toEqual(1 * gigabyte)

            result = bytesize.value('1 gb')

            expect(result).toEqual(1 * gigabyte)

            result = bytesize.value('1GB')

            expect(result).toEqual(1 * gigabyte)

            result = bytesize.value('1 GB')

            expect(result).toEqual(1 * gigabyte)

            result = bytesize.value('1gigabyte')

            expect(result).toEqual(1 * gigabyte)

            result = bytesize.value('1 gigabyte')

            expect(result).toEqual(1 * gigabyte)

            result = bytesize.value('1gigabytes')

            expect(result).toEqual(1 * gigabyte)

            result = bytesize.value('1 gigabytes')

            expect(result).toEqual(1 * gigabyte)

            result = bytesize.value('2gb')

            expect(result).toEqual(2 * gigabyte)

            result = bytesize.value('2 gb')

            expect(result).toEqual(2 * gigabyte)

            result = bytesize.value('2GB')

            expect(result).toEqual(2 * gigabyte)

            result = bytesize.value('2 GB')

            expect(result).toEqual(2 * gigabyte)

            result = bytesize.value('2gigabyte')

            expect(result).toEqual(2 * gigabyte)

            result = bytesize.value('2 gigabyte')

            expect(result).toEqual(2 * gigabyte)

            result = bytesize.value('2gigabytes')

            expect(result).toEqual(2 * gigabyte)

            result = bytesize.value('2 gigabytes')

            expect(result).toEqual(2 * gigabyte)

            result = bytesize.value('1000gb')

            expect(result).toEqual(1000 * gigabyte)

            result = bytesize.value('1000 gb')

            expect(result).toEqual(1000 * gigabyte)

            result = bytesize.value('1000GB')

            expect(result).toEqual(1000 * gigabyte)

            result = bytesize.value('1000 GB')

            expect(result).toEqual(1000 * gigabyte)

            result = bytesize.value('1000megabyte')

            expect(result).toEqual(1000 * megabyte)

            result = bytesize.value('1000 megabyte')

            expect(result).toEqual(1000 * megabyte)

            result = bytesize.value('1000megabytes')

            expect(result).toEqual(1000 * megabyte)

            result = bytesize.value('1000 megabytes')

            expect(result).toEqual(1000 * megabyte)
        })

    })

    describe('human', () => {

        test('bad value', async () => {
            result = bytesize.human(undefined)

            expect(result).toEqual(null)

            result = bytesize.human(null)

            expect(result).toEqual(null)
        })

        test('bytes => bytes', async () => {
            let result

            result = bytesize.human(0, 'b')

            expect(result).toEqual('0 B')

            result = bytesize.human(1024, 'b')

            expect(result).toEqual('1024 B')

            result = bytesize.human('1 b', 'b')

            expect(result).toEqual('1 B')

            result = bytesize.human('1b', 'b')

            expect(result).toEqual('1 B')

            result = bytesize.human('1 B', 'b')

            expect(result).toEqual('1 B')

            result = bytesize.human('1B', 'b')

            expect(result).toEqual('1 B')

            result = bytesize.human('1 byte', 'b')

            expect(result).toEqual('1 B')

            result = bytesize.human('1byte', 'b')

            expect(result).toEqual('1 B')

            result = bytesize.human('1 Byte', 'b')

            expect(result).toEqual('1 B')

            result = bytesize.human('1Byte', 'b')

            expect(result).toEqual('1 B')

            result = bytesize.human('1 bytes', 'b')

            expect(result).toEqual('1 B')

            result = bytesize.human('1bytes', 'b')

            expect(result).toEqual('1 B')

            result = bytesize.human('1 Bytes', 'b')

            expect(result).toEqual('1 B')

            result = bytesize.human('1Bytes', 'b')

            expect(result).toEqual('1 B')
        })

        test('bytes => kilobytes', async () => {
            let result

            result = bytesize.human(0, 'kb')

            expect(result).toEqual('0 kB')

            result = bytesize.human(1024, 'kb')

            expect(result).toEqual('1 kB')

            result = bytesize.human('1 b', 'kb')

            expect(result).toEqual('0.001 kB')

            result = bytesize.human('1b', 'kb')

            expect(result).toEqual('0.001 kB')

            result = bytesize.human('1 B', 'kb')

            expect(result).toEqual('0.001 kB')

            result = bytesize.human('1B', 'kb')

            expect(result).toEqual('0.001 kB')

            result = bytesize.human('1 byte', 'kb')

            expect(result).toEqual('0.001 kB')

            result = bytesize.human('1byte', 'kb')

            expect(result).toEqual('0.001 kB')

            result = bytesize.human('1 Byte', 'kb')

            expect(result).toEqual('0.001 kB')

            result = bytesize.human('1Byte', 'kb')

            expect(result).toEqual('0.001 kB')

            result = bytesize.human('1 bytes', 'kb')

            expect(result).toEqual('0.001 kB')

            result = bytesize.human('1bytes', 'kb')

            expect(result).toEqual('0.001 kB')

            result = bytesize.human('1 Bytes', 'kb')

            expect(result).toEqual('0.001 kB')

            result = bytesize.human('1Bytes', 'kb')

            expect(result).toEqual('0.001 kB')
        })

        test('bytes => megabytes', async () => {
            let result

            result = bytesize.human(0, 'mb')

            expect(result).toEqual('0 MB')

            result = bytesize.human(1024, 'mb')

            expect(result).toEqual('0.001 MB')

            result = bytesize.human('1 b', 'mb')

            expect(result).toEqual('0.000001 MB')

            result = bytesize.human('1b', 'mb')

            expect(result).toEqual('0.000001 MB')

            result = bytesize.human('1 B', 'mb')

            expect(result).toEqual('0.000001 MB')

            result = bytesize.human('1B', 'mb')

            expect(result).toEqual('0.000001 MB')

            result = bytesize.human('1 byte', 'mb')

            expect(result).toEqual('0.000001 MB')

            result = bytesize.human('1byte', 'mb')

            expect(result).toEqual('0.000001 MB')

            result = bytesize.human('1 Byte', 'mb')

            expect(result).toEqual('0.000001 MB')

            result = bytesize.human('1Byte', 'mb')

            expect(result).toEqual('0.000001 MB')

            result = bytesize.human('1 bytes', 'mb')

            expect(result).toEqual('0.000001 MB')

            result = bytesize.human('1bytes', 'mb')

            expect(result).toEqual('0.000001 MB')

            result = bytesize.human('1 Bytes', 'mb')

            expect(result).toEqual('0.000001 MB')

            result = bytesize.human('1Bytes', 'mb')

            expect(result).toEqual('0.000001 MB')
        })

        test('kilobytes => bytes', async () => {
            let result

            result = bytesize.human('1 kb', 'b')

            expect(result).toEqual('1024 B')

            result = bytesize.human('1kb', 'b')

            expect(result).toEqual('1024 B')

            result = bytesize.human('1 kB', 'b')

            expect(result).toEqual('1024 B')

            result = bytesize.human('1kB', 'b')

            expect(result).toEqual('1024 B')

            result = bytesize.human('1 kilobyte', 'b')

            expect(result).toEqual('1024 B')

            result = bytesize.human('1kilobyte', 'b')

            expect(result).toEqual('1024 B')

            result = bytesize.human('1 kiloByte', 'b')

            expect(result).toEqual('1024 B')

            result = bytesize.human('1kiloByte', 'b')

            expect(result).toEqual('1024 B')

            result = bytesize.human('1 kilobytes', 'b')

            expect(result).toEqual('1024 B')

            result = bytesize.human('1kilobytes', 'b')

            expect(result).toEqual('1024 B')

            result = bytesize.human('1 kiloBytes', 'b')

            expect(result).toEqual('1024 B')

            result = bytesize.human('1kiloBytes', 'b')

            expect(result).toEqual('1024 B')
        })

        test('kilobytes => kilobytes', async () => {
            let result

            result = bytesize.human('1 kb', 'kb')

            expect(result).toEqual('1 kB')

            result = bytesize.human('1kb', 'kb')

            expect(result).toEqual('1 kB')

            result = bytesize.human('1 kB', 'kb')

            expect(result).toEqual('1 kB')

            result = bytesize.human('1kB', 'kb')

            expect(result).toEqual('1 kB')

            result = bytesize.human('1 kilobyte', 'kb')

            expect(result).toEqual('1 kB')

            result = bytesize.human('1kilobyte', 'kb')

            expect(result).toEqual('1 kB')

            result = bytesize.human('1 kiloByte', 'kb')

            expect(result).toEqual('1 kB')

            result = bytesize.human('1kiloByte', 'kb')

            expect(result).toEqual('1 kB')

            result = bytesize.human('1 kilobytes', 'kb')

            expect(result).toEqual('1 kB')

            result = bytesize.human('1kilobytes', 'kb')

            expect(result).toEqual('1 kB')

            result = bytesize.human('1 kiloBytes', 'kb')

            expect(result).toEqual('1 kB')

            result = bytesize.human('1kiloBytes', 'kb')

            expect(result).toEqual('1 kB')
        })

        test('kilobytes => megabytes', async () => {
            let result

            result = bytesize.human('1 kb', 'mb')

            expect(result).toEqual('0.001 MB')

            result = bytesize.human('1kb', 'mb')

            expect(result).toEqual('0.001 MB')

            result = bytesize.human('1 kB', 'mb')

            expect(result).toEqual('0.001 MB')

            result = bytesize.human('1kB', 'mb')

            expect(result).toEqual('0.001 MB')

            result = bytesize.human('1 kilobyte', 'mb')

            expect(result).toEqual('0.001 MB')

            result = bytesize.human('1kilobyte', 'mb')

            expect(result).toEqual('0.001 MB')

            result = bytesize.human('1 kiloByte', 'mb')

            expect(result).toEqual('0.001 MB')

            result = bytesize.human('1kiloByte', 'mb')

            expect(result).toEqual('0.001 MB')

            result = bytesize.human('1 kilobytes', 'mb')

            expect(result).toEqual('0.001 MB')

            result = bytesize.human('1kilobytes', 'mb')

            expect(result).toEqual('0.001 MB')

            result = bytesize.human('1 kiloBytes', 'mb')

            expect(result).toEqual('0.001 MB')

            result = bytesize.human('1kiloBytes', 'mb')

            expect(result).toEqual('0.001 MB')
        })

        test('metabytes => bytes', async () => {
            let result

            result = bytesize.human('1 mb', 'b')

            expect(result).toEqual('1048576 B')

            result = bytesize.human('1mb', 'b')

            expect(result).toEqual('1048576 B')

            result = bytesize.human('1 MB', 'b')

            expect(result).toEqual('1048576 B')

            result = bytesize.human('1MB', 'b')

            expect(result).toEqual('1048576 B')

            result = bytesize.human('1 megabyte', 'b')

            expect(result).toEqual('1048576 B')

            result = bytesize.human('1megabyte', 'b')

            expect(result).toEqual('1048576 B')

            result = bytesize.human('1 MegaByte', 'b')

            expect(result).toEqual('1048576 B')

            result = bytesize.human('1MegaByte', 'b')

            expect(result).toEqual('1048576 B')

            result = bytesize.human('1 MegaBytes', 'b')

            expect(result).toEqual('1048576 B')

            result = bytesize.human('1MegaBytes', 'b')

            expect(result).toEqual('1048576 B')

            result = bytesize.human('1 MegaBytes', 'b')

            expect(result).toEqual('1048576 B')

            result = bytesize.human('1MegaBytes', 'b')

            expect(result).toEqual('1048576 B')
        })

        test('megabytes => kilobytes', async () => {
            let result

            result = bytesize.human('1 mb', 'kb')

            expect(result).toEqual('1024 kB')

            result = bytesize.human('1mb', 'kb')

            expect(result).toEqual('1024 kB')

            result = bytesize.human('1 MB', 'kb')

            expect(result).toEqual('1024 kB')

            result = bytesize.human('1MB', 'kb')

            expect(result).toEqual('1024 kB')

            result = bytesize.human('1 megabyte', 'kb')

            expect(result).toEqual('1024 kB')

            result = bytesize.human('1megabyte', 'kb')

            expect(result).toEqual('1024 kB')

            result = bytesize.human('1 MegaByte', 'kb')

            expect(result).toEqual('1024 kB')

            result = bytesize.human('1 MegaByte', 'kb')

            expect(result).toEqual('1024 kB')

            result = bytesize.human('1 megabytes', 'kb')

            expect(result).toEqual('1024 kB')

            result = bytesize.human('1megabytes', 'kb')

            expect(result).toEqual('1024 kB')

            result = bytesize.human('1 MegaBytes', 'kb')

            expect(result).toEqual('1024 kB')

            result = bytesize.human('1MegaBytes', 'kb')

            expect(result).toEqual('1024 kB')
        })

        test('megabytes => megabytes', async () => {
            let result

            result = bytesize.human('1 mb', 'mb')

            expect(result).toEqual('1 MB')

            result = bytesize.human('1mb', 'mb')

            expect(result).toEqual('1 MB')

            result = bytesize.human('1 MB', 'mb')

            expect(result).toEqual('1 MB')

            result = bytesize.human('1MB', 'mb')

            expect(result).toEqual('1 MB')

            result = bytesize.human('1 megabyte', 'mb')

            expect(result).toEqual('1 MB')

            result = bytesize.human('1megabyte', 'mb')

            expect(result).toEqual('1 MB')

            result = bytesize.human('1 megaByte', 'mb')

            expect(result).toEqual('1 MB')

            result = bytesize.human('1 megaByte', 'mb')

            expect(result).toEqual('1 MB')

            result = bytesize.human('1 megabytes', 'mb')

            expect(result).toEqual('1 MB')

            result = bytesize.human('1megabytes', 'mb')

            expect(result).toEqual('1 MB')

            result = bytesize.human('1 MegaBytes', 'mb')

            expect(result).toEqual('1 MB')

            result = bytesize.human('1MegaBytes', 'mb')

            expect(result).toEqual('1 MB')
        })

    })

})
