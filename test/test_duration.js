/* global jest describe test expect */

// =========================================
//       IMPORTS
// --------------------------------------

const duration = require('../src/duration')


// =========================================
//       EXTENSIONS
// --------------------------------------

expect.extend(require('jest-tobetype'))


// =========================================
//       TESTS
// --------------------------------------

describe('duration', () => {

    test('import', () => {
        expect(duration).toBeInstanceOf(Object)
    })

    describe('value', () => {

        const second = 1
        const minute = 60 * second
        const hour = 60 * minute
        const day = 24 * hour

        test('seconds', async () => {
            let result

            result = duration.value(undefined)

            expect(result).toEqual(0)

            result = duration.value(null)

            expect(result).toEqual(0)

            result = duration.value(0)

            expect(result).toEqual(0)

            result = duration.value(1 * second)

            expect(result).toEqual(1 * second)

            result = duration.value(1 * minute)

            expect(result).toEqual(1 * minute)

            result = duration.value(1 * hour)

            expect(result).toEqual(1 * hour)

            result = duration.value(1 * day)

            expect(result).toEqual(1 * day)

            result = duration.value('0')

            expect(result).toEqual(0 * second)

            result = duration.value('2')

            expect(result).toEqual(2 * second)

            result = duration.value('1000')

            result = duration.value('0s')

            expect(result).toEqual(0 * second)

            result = duration.value('0 s')

            expect(result).toEqual(0 * second)

            result = duration.value('0second')

            expect(result).toEqual(0 * second)

            result = duration.value('0 second')

            expect(result).toEqual(0 * second)

            result = duration.value('0seconds')

            expect(result).toEqual(0 * second)

            result = duration.value('0 seconds')

            expect(result).toEqual(0 * second)

            result = duration.value('0Second')

            expect(result).toEqual(0 * second)

            result = duration.value('0 Second')

            expect(result).toEqual(0 * second)

            result = duration.value('0Seconds')

            expect(result).toEqual(0 * second)

            result = duration.value('0 Seconds')

            expect(result).toEqual(0 * second)

            result = duration.value('1s')

            expect(result).toEqual(1 * second)

            result = duration.value('1 s')

            expect(result).toEqual(1 * second)

            result = duration.value('1second')

            expect(result).toEqual(1 * second)

            result = duration.value('1 second')

            expect(result).toEqual(1 * second)

            result = duration.value('1seconds')

            expect(result).toEqual(1 * second)

            result = duration.value('1 seconds')

            expect(result).toEqual(1 * second)

            result = duration.value('1Second')

            expect(result).toEqual(1 * second)

            result = duration.value('1 Second')

            expect(result).toEqual(1 * second)

            result = duration.value('1Seconds')

            expect(result).toEqual(1 * second)

            result = duration.value('1 Seconds')

            expect(result).toEqual(1 * second)

            result = duration.value('2s')

            expect(result).toEqual(2 * second)

            result = duration.value('2 s')

            expect(result).toEqual(2 * second)

            result = duration.value('2second')

            expect(result).toEqual(2 * second)

            result = duration.value('2 second')

            expect(result).toEqual(2 * second)

            result = duration.value('2seconds')

            expect(result).toEqual(2 * second)

            result = duration.value('2 seconds')

            expect(result).toEqual(2 * second)

            result = duration.value('2Second')

            expect(result).toEqual(2 * second)

            result = duration.value('2 Second')

            expect(result).toEqual(2 * second)

            result = duration.value('2Seconds')

            expect(result).toEqual(2 * second)

            result = duration.value('2 Seconds')

            expect(result).toEqual(2 * second)

            result = duration.value('1000s')

            expect(result).toEqual(1000 * second)

            result = duration.value('1000 s')

            expect(result).toEqual(1000 * second)

            result = duration.value('1000second')

            expect(result).toEqual(1000 * second)

            result = duration.value('1000 second')

            expect(result).toEqual(1000 * second)

            result = duration.value('1000seconds')

            expect(result).toEqual(1000 * second)

            result = duration.value('1000 seconds')

            expect(result).toEqual(1000 * second)

            result = duration.value('1000Second')

            expect(result).toEqual(1000 * second)

            result = duration.value('1000 Second')

            expect(result).toEqual(1000 * second)

            result = duration.value('1000Seconds')

            expect(result).toEqual(1000 * second)

            result = duration.value('1000 Seconds')

            expect(result).toEqual(1000 * second)
        })

        test('minutes', async () => {
            let result

            result = duration.value('0m')

            expect(result).toEqual(0 * minute)

            result = duration.value('0 m')

            expect(result).toEqual(0 * minute)

            result = duration.value('0M')

            expect(result).toEqual(0 * minute)

            result = duration.value('0 M')

            expect(result).toEqual(0 * minute)

            result = duration.value('0minute')

            expect(result).toEqual(0 * minute)

            result = duration.value('0 minute')

            expect(result).toEqual(0 * minute)

            result = duration.value('0minutes')

            expect(result).toEqual(0 * minute)

            result = duration.value('0 minutes')

            expect(result).toEqual(0 * minute)

            result = duration.value('0.214642524719 m')

            expect(result).toEqual(0.214642524719 * minute)

            result = duration.value('0.214642524719minute')

            expect(result).toEqual(0.214642524719 * minute)

            result = duration.value('0.214642524719 minute')

            expect(result).toEqual(0.214642524719 * minute)

            result = duration.value('0.214642524719minutes')

            expect(result).toEqual(0.214642524719 * minute)

            result = duration.value('1m')

            expect(result).toEqual(1 * minute)

            result = duration.value('1 m')

            expect(result).toEqual(1 * minute)

            result = duration.value('1minute')

            expect(result).toEqual(1 * minute)

            result = duration.value('1 minute')

            expect(result).toEqual(1 * minute)

            result = duration.value('1minutes')

            expect(result).toEqual(1 * minute)

            result = duration.value('1 minutes')

            expect(result).toEqual(1 * minute)

            result = duration.value('2m')

            expect(result).toEqual(2 * minute)

            result = duration.value('2 m')

            expect(result).toEqual(2 * minute)

            result = duration.value('2minute')

            expect(result).toEqual(2 * minute)

            result = duration.value('2 minute')

            expect(result).toEqual(2 * minute)

            result = duration.value('2minutes')

            expect(result).toEqual(2 * minute)

            result = duration.value('2 minutes')

            expect(result).toEqual(2 * minute)

            result = duration.value('1000m')

            expect(result).toEqual(1000 * minute)

            result = duration.value('1000 m')

            expect(result).toEqual(1000 * minute)

            result = duration.value('1000minute')

            expect(result).toEqual(1000 * minute)

            result = duration.value('1000 minute')

            expect(result).toEqual(1000 * minute)

            result = duration.value('1000minutes')

            expect(result).toEqual(1000 * minute)

            result = duration.value('1000 minutes')

            expect(result).toEqual(1000 * minute)
        })

        test('hours', async () => {
            let result

            result = duration.value('0h')

            expect(result).toEqual(0 * hour)

            result = duration.value('0 h')

            expect(result).toEqual(0 * hour)

            result = duration.value('0hour')

            expect(result).toEqual(0 * hour)

            result = duration.value('0 hour')

            expect(result).toEqual(0 * hour)

            result = duration.value('0hours')

            expect(result).toEqual(0 * hour)

            result = duration.value('0 hours')

            expect(result).toEqual(0 * hour)

            result = duration.value('0.214642524719h')

            expect(result).toEqual(0.214642524719 * hour)

            result = duration.value('0.214642524719 h')

            expect(result).toEqual(0.214642524719 * hour)

            result = duration.value('0.214642524719H')

            expect(result).toEqual(0.214642524719 * hour)

            result = duration.value('0.214642524719 H')

            expect(result).toEqual(0.214642524719 * hour)

            result = duration.value('0.214642524719hour')

            expect(result).toEqual(0.214642524719 * hour)

            result = duration.value('0.214642524719 hour')

            expect(result).toEqual(0.214642524719 * hour)

            result = duration.value('0.214642524719hours')

            expect(result).toEqual(0.214642524719 * hour)

            result = duration.value('0 hours')

            expect(result).toEqual(0 * hour)

            result = duration.value('1h')

            expect(result).toEqual(1 * hour)

            result = duration.value('1 h')

            expect(result).toEqual(1 * hour)

            result = duration.value('1hour')

            expect(result).toEqual(1 * hour)

            result = duration.value('1 hour')

            expect(result).toEqual(1 * hour)

            result = duration.value('1hours')

            expect(result).toEqual(1 * hour)

            result = duration.value('1 hours')

            expect(result).toEqual(1 * hour)

            result = duration.value('2h')

            expect(result).toEqual(2 * hour)

            result = duration.value('2 h')

            expect(result).toEqual(2 * hour)

            result = duration.value('2hour')

            expect(result).toEqual(2 * hour)

            result = duration.value('2 hour')

            expect(result).toEqual(2 * hour)

            result = duration.value('2hours')

            expect(result).toEqual(2 * hour)

            result = duration.value('2 hours')

            expect(result).toEqual(2 * hour)

            result = duration.value('1000h')

            expect(result).toEqual(1000 * hour)

            result = duration.value('1000 h')

            expect(result).toEqual(1000 * hour)

            result = duration.value('1000hour')

            expect(result).toEqual(1000 * hour)

            result = duration.value('1000 hour')

            expect(result).toEqual(1000 * hour)

            result = duration.value('1000hours')

            expect(result).toEqual(1000 * hour)

            result = duration.value('1000 hours')

            expect(result).toEqual(1000 * hour)
        })

        test('days', async () => {
            let result

            result = duration.value('0d')

            expect(result).toEqual(0 * day)

            result = duration.value('0 d')

            expect(result).toEqual(0 * day)

            result = duration.value('0D')

            expect(result).toEqual(0 * day)

            result = duration.value('0 D')

            expect(result).toEqual(0 * day)

            result = duration.value('0day')

            expect(result).toEqual(0 * day)

            result = duration.value('0 day')

            expect(result).toEqual(0 * day)

            result = duration.value('0days')

            expect(result).toEqual(0 * day)

            result = duration.value('0 days')

            expect(result).toEqual(0 * day)

            result = duration.value('1d')

            expect(result).toEqual(1 * day)

            result = duration.value('1 d')

            expect(result).toEqual(1 * day)

            result = duration.value('1day')

            expect(result).toEqual(1 * day)

            result = duration.value('1 day')

            expect(result).toEqual(1 * day)

            result = duration.value('1days')

            expect(result).toEqual(1 * day)

            result = duration.value('1 days')

            expect(result).toEqual(1 * day)

            result = duration.value('2d')

            expect(result).toEqual(2 * day)

            result = duration.value('2 d')

            expect(result).toEqual(2 * day)

            result = duration.value('2day')

            expect(result).toEqual(2 * day)

            result = duration.value('2 day')

            expect(result).toEqual(2 * day)

            result = duration.value('2days')

            expect(result).toEqual(2 * day)

            result = duration.value('2 days')

            expect(result).toEqual(2 * day)

            result = duration.value('1000d')

            expect(result).toEqual(1000 * day)

            result = duration.value('1000 d')

            expect(result).toEqual(1000 * day)

            result = duration.value('1000day')

            expect(result).toEqual(1000 * day)

            result = duration.value('1000 day')

            expect(result).toEqual(1000 * day)

            result = duration.value('1000days')

            expect(result).toEqual(1000 * day)

            result = duration.value('1000 days')

            expect(result).toEqual(1000 * day)
        })
    })

    describe('human', () => {

        test('seconds => seconds', async () => {
            let result

            result = duration.human(0, 's')

            expect(result).toEqual('0 s')

            result = duration.human(1000, 's')

            expect(result).toEqual('1000 s')

            result = duration.human('1 s', 's')

            expect(result).toEqual('1 s')

            result = duration.human('1s', 's')

            expect(result).toEqual('1 s')

            result = duration.human('1 S', 's')

            expect(result).toEqual('1 s')

            result = duration.human('1S', 's')

            expect(result).toEqual('1 s')

            result = duration.human('1 second', 's')

            expect(result).toEqual('1 s')

            result = duration.human('1second', 's')

            expect(result).toEqual('1 s')

            result = duration.human('1 seconds', 's')

            expect(result).toEqual('1 s')

            result = duration.human('1seconds', 's')

            expect(result).toEqual('1 s')

            result = duration.human('1 Second', 's')

            expect(result).toEqual('1 s')

            result = duration.human('1Second', 's')

            expect(result).toEqual('1 s')

            result = duration.human('1 Seconds', 's')

            expect(result).toEqual('1 s')

            result = duration.human('1Seconds', 's')

            expect(result).toEqual('1 s')
        })

        test('seconds => minutes', async () => {
            let result

            result = duration.human(0, 'm')

            expect(result).toEqual('0 m')

            result = duration.human('1 s', 'm')

            expect(result).toEqual('0.02 m')

            result = duration.human('1s', 'm')

            expect(result).toEqual('0.02 m')

            result = duration.human('1 second', 'm')

            expect(result).toEqual('0.02 m')

            result = duration.human('1second', 'm')

            expect(result).toEqual('0.02 m')

            result = duration.human('1 seconds', 'm')

            expect(result).toEqual('0.02 m')

            result = duration.human('1seconds', 'm')

            expect(result).toEqual('0.02 m')

            result = duration.human('1 Second', 'm')

            expect(result).toEqual('0.02 m')

            result = duration.human('1Second', 'm')

            expect(result).toEqual('0.02 m')

            result = duration.human('1 Seconds', 'm')

            expect(result).toEqual('0.02 m')

            result = duration.human('1Seconds', 'm')

            expect(result).toEqual('0.02 m')
        })

        test('seconds => hours', async () => {
            let result

            result = duration.human(0, 'h')

            expect(result).toEqual('0 h')

            result = duration.human('1 s', 'h')

            expect(result).toEqual('0.0003 h')

            result = duration.human('1s', 'h')

            expect(result).toEqual('0.0003 h')

            result = duration.human('1 second', 'h')

            expect(result).toEqual('0.0003 h')

            result = duration.human('1second', 'h')

            expect(result).toEqual('0.0003 h')

            result = duration.human('1 seconds', 'h')

            expect(result).toEqual('0.0003 h')

            result = duration.human('1seconds', 'h')

            expect(result).toEqual('0.0003 h')

            result = duration.human('1 Second', 'h')

            expect(result).toEqual('0.0003 h')

            result = duration.human('1Second', 'h')

            expect(result).toEqual('0.0003 h')

            result = duration.human('1 Seconds', 'h')

            expect(result).toEqual('0.0003 h')

            result = duration.human('1Seconds', 'h')

            expect(result).toEqual('0.0003 h')
        })

        test('minutes => seconds', async () => {
            let result

            result = duration.human('1 m', 's')

            expect(result).toEqual('60 s')

            result = duration.human('1m', 's')

            expect(result).toEqual('60 s')

            result = duration.human('1 minute', 's')

            expect(result).toEqual('60 s')

            result = duration.human('1minute', 's')

            expect(result).toEqual('60 s')

            result = duration.human('1 minutes', 's')

            expect(result).toEqual('60 s')

            result = duration.human('1minutes', 's')

            expect(result).toEqual('60 s')

            result = duration.human('1 Minute', 's')

            expect(result).toEqual('60 s')

            result = duration.human('1Minute', 's')

            expect(result).toEqual('60 s')

            result = duration.human('1 Minutes', 's')

            expect(result).toEqual('60 s')

            result = duration.human('1Minutes', 's')

            expect(result).toEqual('60 s')
        })

        test('minutes => minutes', async () => {
            let result

            result = duration.human('1 m', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1m', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1 minute', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1minute', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1 minutes', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1minutes', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1 Minute', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1Minute', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1 Minutes', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1Minutes', 'm')

            expect(result).toEqual('1 m')
        })

        test('minutes => hours', async () => {
            let result

            result = duration.human('1 m', 'h')

            expect(result).toEqual('0.02 h')

            result = duration.human('1m', 'h')

            expect(result).toEqual('0.02 h')

            result = duration.human('1 minute', 'h')

            expect(result).toEqual('0.02 h')

            result = duration.human('1minute', 'h')

            expect(result).toEqual('0.02 h')

            result = duration.human('1 minutes', 'h')

            expect(result).toEqual('0.02 h')

            result = duration.human('1minutes', 'h')

            expect(result).toEqual('0.02 h')

            result = duration.human('1 Minute', 'h')

            expect(result).toEqual('0.02 h')

            result = duration.human('1Minute', 'h')

            expect(result).toEqual('0.02 h')

            result = duration.human('1 Minutes', 'h')

            expect(result).toEqual('0.02 h')

            result = duration.human('1Minutes', 'h')

            expect(result).toEqual('0.02 h')
        })

        test('minutes => days', async () => {
            let result

            result = duration.human('1 m', 'd')

            expect(result).toEqual('0.0007 d')

            result = duration.human('1m', 'd')

            expect(result).toEqual('0.0007 d')

            result = duration.human('1 minute', 'd')

            expect(result).toEqual('0.0007 d')

            result = duration.human('1minute', 'd')

            expect(result).toEqual('0.0007 d')

            result = duration.human('1 minutes', 'd')

            expect(result).toEqual('0.0007 d')

            result = duration.human('1minutes', 'd')

            expect(result).toEqual('0.0007 d')

            result = duration.human('1 Minute', 'd')

            expect(result).toEqual('0.0007 d')

            result = duration.human('1Minute', 'd')

            expect(result).toEqual('0.0007 d')

            result = duration.human('1 Minutes', 'd')

            expect(result).toEqual('0.0007 d')

            result = duration.human('1Minutes', 'd')

            expect(result).toEqual('0.0007 d')
        })

        test('hours => seconds', async () => {
            let result

            result = duration.human('1 m', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1m', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1 minute', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1minute', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1 minutes', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1minutes', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1 Minute', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1Minute', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1 Minutes', 'm')

            expect(result).toEqual('1 m')

            result = duration.human('1Minutes', 'm')

            expect(result).toEqual('1 m')
        })

        test('hours => minutes', async () => {
            let result

            result = duration.human('1 h', 'm')

            expect(result).toEqual('60 m')

            result = duration.human('1h', 'm')

            expect(result).toEqual('60 m')

            result = duration.human('1 hour', 'm')

            expect(result).toEqual('60 m')

            result = duration.human('1hour', 'm')

            expect(result).toEqual('60 m')

            result = duration.human('1 hours', 'm')

            expect(result).toEqual('60 m')

            result = duration.human('1hours', 'm')

            expect(result).toEqual('60 m')

            result = duration.human('1 Hour', 'm')

            expect(result).toEqual('60 m')

            result = duration.human('1Hour', 'm')

            expect(result).toEqual('60 m')

            result = duration.human('1 Hours', 'm')

            expect(result).toEqual('60 m')

            result = duration.human('1Hours', 'm')

            expect(result).toEqual('60 m')
        })

        test('hours => hours', async () => {
            let result

            result = duration.human('1 h', 'h')

            expect(result).toEqual('1 h')

            result = duration.human('1h', 'h')

            expect(result).toEqual('1 h')

            result = duration.human('1 hour', 'h')

            expect(result).toEqual('1 h')

            result = duration.human('1hour', 'h')

            expect(result).toEqual('1 h')

            result = duration.human('1 hours', 'h')

            expect(result).toEqual('1 h')

            result = duration.human('1hours', 'h')

            expect(result).toEqual('1 h')

            result = duration.human('1 Hour', 'h')

            expect(result).toEqual('1 h')

            result = duration.human('1Hour', 'h')

            expect(result).toEqual('1 h')

            result = duration.human('1 Hours', 'h')

            expect(result).toEqual('1 h')

            result = duration.human('1Hours', 'h')

            expect(result).toEqual('1 h')
        })

        test('hours => days', async () => {
            let result

            result = duration.human('1 h', 'd')

            expect(result).toEqual('0.04 d')

            result = duration.human('1h', 'd')

            expect(result).toEqual('0.04 d')

            result = duration.human('1 hour', 'd')

            expect(result).toEqual('0.04 d')

            result = duration.human('1hour', 'd')

            expect(result).toEqual('0.04 d')

            result = duration.human('1 hours', 'd')

            expect(result).toEqual('0.04 d')

            result = duration.human('1hours', 'd')

            expect(result).toEqual('0.04 d')

            result = duration.human('1 Hour', 'd')

            expect(result).toEqual('0.04 d')

            result = duration.human('1Hour', 'd')

            expect(result).toEqual('0.04 d')

            result = duration.human('1 Hours', 'd')

            expect(result).toEqual('0.04 d')

            result = duration.human('1Hours', 'd')

            expect(result).toEqual('0.04 d')
        })

    })

})
